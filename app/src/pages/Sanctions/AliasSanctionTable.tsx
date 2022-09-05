import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableBodyEmptyCell } from '../../components/Table';
import { ExpandedAlias } from '../../core/Aliases/Aliases.types';
import { ErrorStatus, LoadingStatus } from '../../components/LoadStatus';
import { EnterIcon } from '../../components/Icons/EnterIcon';

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

export function AliasSanctionTable({ data, status, onRetry }: AliasSanctionTableProps) {
  return (
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
        <SanctionsResults data={data} status={status} onRetry={onRetry} />
      </TableBody>
    </Table>
  );
}
