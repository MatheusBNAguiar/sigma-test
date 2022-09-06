import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { AliasesApi } from '../../../core/Aliases/Aliases.api';

export function useAliasSanctions(alias) {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const { status, data, refetch } = useQuery(
    ['aliases', page, alias],
    () => AliasesApi.getPaginatedAliases(page, alias),
    { retry: false },
  );

  const { pages: apiPages, list = [] } = data || {};

  useEffect(() => {
    if (apiPages) {
      setPages(prev => {
        if (prev > apiPages) {
          setPage(1);
        }
        return apiPages;
      });
    }
  }, [apiPages]);

  return {
    page,
    pages,
    onPageChange: setPage,
    status,
    data: list,
    refetch,
  };
}
