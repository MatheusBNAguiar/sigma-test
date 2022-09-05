import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { AliasesApi } from '../../../core/Aliases/Aliases.api';

export function useAliasSanctions(alias) {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

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

  return {
    page,
    pages,
    onPageChange: setPage,
    status,
    data,
    refetch,
  };
}
