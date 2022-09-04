import styled from '@emotion/styled';

export const Table = styled.table`
  background-color: white;
  table-layout: auto;
  width: 100%;
  max-width: 100%;
  margin: auto;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
`;

export const TableCell = styled.td`
  font-size: 14px;
  vertical-align: middle;
  text-align: left;
  background: white;
  color: black;
  white-space: nowrap;
  padding: 20px;
  font-weight: 500;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:last-of-type {
    border-radius: 0 10px 10px 0;
  }
  &:first-of-type {
    border-radius: 10px 0 0 10px;
  }
`;

export const TableHeader = styled.thead``;

export const TableRow = styled.tr`
  td:first-of-type {
    border-radius: 10px 0px 0px 10px;
  }
  td:last-of-type {
    border-radius: 0px 10px 10px 0px;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-of-type(even) {
    td {
      background-color: #ccc;
    }
  }
`;

export const TableBodyEmptyCell = styled.td`
  background-color: #eee;
  padding: 20px;
  text-align: center;
  border-radius: 0 0 8px 8px;
`;
