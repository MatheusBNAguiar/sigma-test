import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableBodyEmptyCell } from '../../components/Table';
import { ExpandedAlias } from '../../core/Aliases/Aliases.types';
import { ErrorStatus, LoadingStatus } from '../../components/LoadStatus';
import { EnterIcon } from '../../components/Icons/EnterIcon';
import styled from '@emotion/styled';

type AliasSanctionTableProps = {
  status: 'error' | 'loading' | 'success';
  data?: ExpandedAlias[];
  onRetry: () => void;
};

function SanctionsResults({ data, status, onRetry }: AliasSanctionTableProps) {
  if (status === 'error') {
    return <ErrorStatus message="Search request failed" onRetry={onRetry} />;
  }

  if (status === 'loading') {
    return <LoadingStatus />;
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
}

const TableResponsiveContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;

  table {
    min-width: 620px;

    &[data-status-prompt='true'] {
      min-width: 100%;
    }
  }
`;

export function AliasSanctionTable({ data, status, onRetry }: AliasSanctionTableProps) {
  return (
    <TableResponsiveContainer>
      <Table data-status-prompt={status !== 'success'}>
        <TableHeader>
          <TableRow>
            <TableCell style={{ width: '40%' }}>Name</TableCell>
            <TableCell style={{ width: '25%' }}>Sanctioned Status</TableCell>
            <TableCell style={{ width: '30%' }}>Matching Alias</TableCell>
            <TableCell style={{ width: '5%' }} />
          </TableRow>
        </TableHeader>
        <TableBody>
          <SanctionsResults data={data} status={status} onRetry={onRetry} />
        </TableBody>
      </Table>
    </TableResponsiveContainer>
  );
}
