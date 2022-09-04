import { Link, useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../components/Table';
import { Title } from '../components/Text'
import { EnterIcon } from '../components/Icons/EnterIcon'
import { Input } from '../components/Input'
import { AliasesApi } from "../core/Aliases/Aliases.api";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from '../components/Pagination/Pagination'

export function Sanctions() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const alias = searchParams.get('alias') || ''

  const { status, data: aliasesList, error, isFetching, isPreviousData } = useQuery(
    ['aliases', page, alias],
    () => AliasesApi.getPaginatedAliases(page, alias).then(({ pages, list }) => {
      setPages(pages)
      return list
    }),
    { retry: false },
  )

  return (
    <div>
      <Title>Sanctions</Title>
      <div>
        <Input placeholder="Search by its alias" onChange={(event) => {
          setSearchParams({ alias: event.target?.value?.toLocaleLowerCase() })
        }}
          value={alias}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Sanctioned Status</TableCell>
            <TableCell>Matching Alias</TableCell>
            <TableCell />
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            aliasesList && aliasesList?.length > 0 ? aliasesList.map(alias => (
              <TableRow key={alias.id}>
                <TableCell >{alias?.sanction?.primaryName}</TableCell>
                <TableCell>{alias?.sanction?.ended ? 'Ended' : 'Issued'}</TableCell>
                <TableCell>
                  {alias?.alias}
                </TableCell>
                <TableCell>
                  <Link to={`/sanctions/${alias?.sanctionId}`}>
                    <EnterIcon />
                  </Link>
                </TableCell>
              </TableRow>
            )) : null
          }
        </TableBody>
        <Pagination quantity={pages} active={page} onChange={setPage} />
      </Table>
    </div>
  )
}
