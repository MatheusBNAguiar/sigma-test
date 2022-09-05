import React from 'react';
import { PaginationContainer, IndexesContainer, PaginationItem } from './Pagination.style';
import { useMemo } from 'react';

import { buildPagesSequence } from './Pagination.helper';

type PaginationProps = {
  quantity: number;
  active: number;
  onChange: (page: number) => void;
  itemRange?: number;
};

export function Pagination({ quantity = 1, active = 1, itemRange = 1, onChange = () => {} }: PaginationProps) {
  const availablePages = useMemo(() => buildPagesSequence(active, itemRange, quantity), [active, itemRange, quantity]);

  if (!quantity) {
    return null;
  }

  return (
    <PaginationContainer role="navigation" aria-label="Pagination Navigation">
      <IndexesContainer>
        {availablePages.map((page, index) => {
          const isClickable = page !== '...';
          return (
            <PaginationItem
              key={isClickable ? page : `ellipsis-on-${index}`}
              aria-label={isClickable ? `Go to page ${page}` : 'Page interval'}
              onClick={isClickable ? () => onChange(page as number) : () => {}}
              data-disabled={!isClickable}
              aria-current={page === active}
            >
              {page}
            </PaginationItem>
          );
        })}
      </IndexesContainer>
    </PaginationContainer>
  );
}
