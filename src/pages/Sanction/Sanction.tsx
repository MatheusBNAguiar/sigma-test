import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { SanctionsApi } from '../../core/Sanctions/Sanctions.api';
import { SubTitle, Title } from '../../components/Text';
import { formatDate } from '../../utils/date';
import { ErrorStatus, LoadingStatus } from '../../components/LoadStatus';
import {
  SanctionHeading,
  SanctionDetails,
  SanctionState,
  SanctionAliases,
  SanctionAlias,
  SanctionStatusContainer,
} from './Sanction.style';
import { Button } from '../../components/Button';

export function Sanction() {
  const { sanctionId } = useParams();
  const navigate = useNavigate();

  const {
    status,
    data: sanction,
    refetch,
  } = useQuery(
    ['sanction', sanctionId],
    () => {
      if (sanctionId) {
        return SanctionsApi.getExpandedSanctionById(sanctionId);
      }
      return null;
    },
    { retry: false },
  );

  if (status === 'error') {
    return (
      <SanctionStatusContainer>
        <ErrorStatus message="Sanction API returned an error" onRetry={refetch} />
      </SanctionStatusContainer>
    );
  }

  if (status === 'loading') {
    return (
      <SanctionStatusContainer>
        <LoadingStatus />
      </SanctionStatusContainer>
    );
  }

  if (!sanction) {
    return (
      <SanctionStatusContainer>
        Sanction not found
        <Button>Return to list</Button>
      </SanctionStatusContainer>
    );
  }

  return (
    <div>
      <SanctionHeading>
        <Title>{sanction.primaryName}</Title>
        <SanctionDetails>
          <SanctionState>
            Issued: <span>{formatDate(sanction.issued)}</span>
          </SanctionState>
          {sanction.ended ? (
            <SanctionState>
              Ended: <span>{formatDate(sanction.ended)}</span>
            </SanctionState>
          ) : null}
        </SanctionDetails>
      </SanctionHeading>
      <hr />
      <SubTitle>Aliases</SubTitle>
      <SanctionAliases>
        {sanction.aliases.map(alias => (
          <SanctionAlias
            key={alias.id}
            role="button"
            onClick={() => {
              navigate(
                `/sanctions?${new URLSearchParams({
                  alias: alias.alias.toLowerCase(),
                })}`,
              );
            }}
          >
            {alias.alias}
          </SanctionAlias>
        ))}
      </SanctionAliases>
    </div>
  );
}
