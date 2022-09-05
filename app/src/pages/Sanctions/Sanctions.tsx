import React from 'react';
import { Title } from '../../components/Text';
import { Input } from '../../components/Input';
import { Pagination } from '../../components/Pagination/Pagination';
import { useSanctionInput } from './hooks/useSanctionInput';
import { AliasSanctionTable } from './AliasSanctionTable';
import { useAliasSanctions } from './hooks/useAliasSanctions';

export function Sanctions() {
  const { value, alias, onInputChange } = useSanctionInput();
  const { page, pages, onPageChange, status, data, refetch } = useAliasSanctions(alias);

  return (
    <div>
      <Title>Sanctions</Title>
      <Input placeholder="Search by its alias" onChange={onInputChange} value={value} />
      <AliasSanctionTable data={data} status={status} onRetry={refetch} />
      <Pagination quantity={pages} active={page} onChange={onPageChange} />
    </div>
  );
}
