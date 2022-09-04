import styled from '@emotion/styled';

export const PaginationContainer = styled.nav`
  color: black;
`;

export const IndexesContainer = styled.div`
  padding: 12px 0;
  border-radius: 12px;
  margin: 4px auto;
  display: flex;
  gap: 4px;
`;

export const PaginationItem = styled.span`
  color: black;
  cursor: pointer;
  user-select: none;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  text-align: center;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  &[data-selected='true'] {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.9);
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
    pointer-events: none;
  }
`;
