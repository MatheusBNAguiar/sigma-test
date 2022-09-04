import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import styled from "@emotion/styled";
import { SanctionWithAlias } from '../core/Sanctions/Sanctions.types'
import { SanctionsApi } from '../core/Sanctions/Sanctions.api'
import { SubTitle, Title } from '../components/Text';
import { formatDate } from '../utils/date';
import { isError, useQuery } from '@tanstack/react-query';
import { Spinner } from '../components/Spinner';

const SanctionHeading = styled.section`
padding-bottom: 1rem;
`

const SanctionDetails = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
`

const SanctionState = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  span {
    font-size: 1rem;
    font-weight: normal;
  }
`

const SanctionAliases = styled.div`
  display:grid;
`

const SanctionAlias = styled.div`
  font-size: 1.25rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.1);
  border: 1px solid #ccc;
  margin: 10px 0;
  cursor: pointer;

  &:hover{
    box-shadow: 0px 0px 4px rgba(0,0,0,0.5);
  }
`

const SanctionNotFound = styled.div`
  font-size: 4rem;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  display: flex;
`

export function Sanction() {
  const { sanctionId } = useParams()
  const navigate = useNavigate()

  const { data: sanction, isLoading, isError, refetch } = useQuery(["sanction", sanctionId], () => {
    if (sanctionId) {
      return SanctionsApi.getExpandedSanctionById(sanctionId)
    }
    return null
  }, { retry: false });

  if (isLoading) {
    return <Spinner />
  }

  if (isError || !sanction) {
    return <SanctionNotFound>Sanction not found</SanctionNotFound>
  }

  return (
    <div>
      <SanctionHeading>
        <Title>
          {sanction.primaryName}
        </Title>
        <SanctionDetails>
          <SanctionState>Issued: <span>{formatDate(sanction.issued)}</span></SanctionState>
          {sanction.ended ? (<SanctionState>Ended: <span>{formatDate(sanction.ended)}</span></SanctionState>) : null}
        </SanctionDetails>
      </SanctionHeading>
      <hr />
      <SubTitle>
        Aliases
      </SubTitle>
      <SanctionAliases>
        {
          sanction.aliases.map((alias) => (
            <SanctionAlias key={alias.id} role='button' onClick={() => {
              navigate(`/sanctions?${new URLSearchParams({
                alias: alias.alias.toLocaleLowerCase()
              })}`)
            }}>
              {alias.alias}
            </SanctionAlias>
          ))
        }
      </SanctionAliases>
    </div>
  )
}
