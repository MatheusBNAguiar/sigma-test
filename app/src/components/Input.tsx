import styled from '@emotion/styled';

export const Input = styled.input`
  background-color: white;
  width: 100%;
  padding: 0.75rem;
  color: black;
  border: 1px solid #ccc;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

  :focus {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
    outline: none;
  }
`;
