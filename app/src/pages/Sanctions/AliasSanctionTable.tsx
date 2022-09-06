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
    return (
      <TableBodyEmptyCell colSpan={100}>
        <ErrorStatus message="Search request failed" onRetry={onRetry} />
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
      {data.map(alias => {
        const hasSanctionLinked = Boolean(alias?.sanction?.primaryName);
        return (
          <TableRow key={`${alias.id}-${alias?.sanctionId}`}>
            <TableCell>{hasSanctionLinked ? alias?.sanction?.primaryName : 'Alias not linked'}</TableCell>
            <TableCell>{hasSanctionLinked ? (alias?.sanction?.ended ? 'Ceased' : 'In Effect') : '-'}</TableCell>
            <TableCell>{alias?.alias}</TableCell>
            <TableCell>
              {hasSanctionLinked && (
                <Link to={`/sanctions/${alias?.sanctionId}`}>
                  <EnterIcon />
                </Link>
              )}
            </TableCell>
          </TableRow>
        );
      })}
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
