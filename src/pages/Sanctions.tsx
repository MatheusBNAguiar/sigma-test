import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableBodyEmptyCell } from '../components/Table';
import { Title } from '../components/Text';
import { EnterIcon } from '../components/Icons/EnterIcon';
import { Input } from '../components/Input';
import { AliasesApi } from '../core/Aliases/Aliases.api';
import { useQuery } from '@tanstack/react-query';
import { Pagination } from '../components/Pagination/Pagination';
import { useSanctionInput } from './Sanction/useSanctionInput';
import { ExpandedAlias } from '../core/Aliases/Aliases.types';
import { Spinner } from '../components/Spinner';
import { Button } from '../components/Button';
import styled from '@emotion/styled';
import { ErrorStatus, LoadingStatus } from '../components/LoadStatus';

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const SanctionsResults = ({
  data,
  status,
  onRetry,
}: {
  status: 'error' | 'loading' | 'success';
  data?: ExpandedAlias[];
  onRetry: () => void;
}) => {
  if (status === 'error') {
    return (
      <TableBodyEmptyCell colSpan={100}>
        <ErrorStatus message='Search request failed' onRetry={onRetry} />
      </TableBodyEmptyCell>
    );
  }

  if (status === 'loading') {
    return (
      <TableBodyEmptyCell colSpan={100}>
        <LoadingStatus />
      </TableBodyEmptyCell>
    );
  }

  if (!data || data?.length === 0) {
    return <TableBodyEmptyCell colSpan={100}>No sanctions were found for this alias</TableBodyEmptyCell>;
  }

  return (
    <React.Fragment>
      {data.map(alias => (
        <TableRow key={`${alias.id}-${alias?.sanctionId}`}>
          <TableCell>{alias?.sanction?.primaryName}</TableCell>
          <TableCell>{alias?.sanction?.ended ? 'Ended' : 'Issued'}</TableCell>
          <TableCell>{alias?.alias}</TableCell>
          <TableCell>
            <Link to={`/sanctions/${alias?.sanctionId}`}>
              <EnterIcon />
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </React.Fragment>
  );
};

export function Sanctions() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const { alias, onInputChange } = useSanctionInput();

  const { status, data, refetch } = useQuery(
    ['aliases', page, alias],
    () =>
      AliasesApi.getPaginatedAliases(page, alias).then(({ pages, list }) => {
        setPages(prev => {
          if (prev > pages) {
            setPage(1);
          }
          return pages;
        });
        return list;
      }),
    { retry: false },
  );

  return (
    <div>
      <Title>Sanctions</Title>
      <Input placeholder="Search by its alias" onChange={onInputChange} value={alias} />
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
          <SanctionsResults data={data} status={status} onRetry={refetch} />
        </TableBody>
      </Table>
      <Pagination quantity={pages} active={page} onChange={setPage} />
    </div>
  );
}
