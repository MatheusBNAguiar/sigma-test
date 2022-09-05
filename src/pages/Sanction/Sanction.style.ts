import styled from "@emotion/styled";

export const SanctionHeading = styled.section`
  padding-bottom: 1rem;
`;

export const SanctionDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SanctionState = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  span {
    font-size: 1rem;
    font-weight: normal;
  }
`;

export const SanctionAliases = styled.div`
  display: grid;
`;

export const SanctionAlias = styled.div`
  font-size: 1.25rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const SanctionStatusContainer = styled.div`
  font-size: 4rem;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  display: flex;
`;


