import React, { useState } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Pagination } from './Pagination';

const TestCase = ({ quantity = 1, active = 1, range = 2 }) => {
  const [state, setState] = useState(active);

  return <Pagination quantity={quantity} active={state} itemRange={range} onChange={setState} />;
};

test("Don't show anything when there is no pages", async () => {
  const { findByText } = render(<TestCase quantity={0} />);
  await waitFor(() => expect(findByText('0')).not.toBe());
});

test('Show the page indicator', async () => {
  const { queryByText } = render(<TestCase quantity={1} />);
  queryByText('1');
});

test('Show the current page correctly', async () => {
  const { queryByText } = render(<TestCase quantity={5} />);
  const paginationItem = queryByText('2');
  fireEvent.click(paginationItem);
  expect(paginationItem.getAttribute('aria-current')).toBe('true');
});

test('Show pages in the middle, last and first', async () => {
  const { queryByText } = render(<TestCase quantity={10} range={3} />);

  const paginationItem4 = queryByText('4');
  fireEvent.click(paginationItem4);

  const paginationItem5 = queryByText('5');
  fireEvent.click(paginationItem5);

  queryByText('1');
  queryByText('3');
  queryByText('4');
  queryByText('6');
  queryByText('7');
  queryByText('10');
});

test("Don't show pages that are not on range", async () => {
  const { queryByText } = render(<TestCase quantity={10} range={3} />);

  const paginationItem4 = queryByText('4');
  fireEvent.click(paginationItem4);

  const paginationItem5 = queryByText('5');
  fireEvent.click(paginationItem5);

  await waitFor(() => expect(queryByText('2')).not.toBe());
  await waitFor(() => expect(queryByText('8')).not.toBe());
});
