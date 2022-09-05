import React from 'react';
import styled from '@emotion/styled';
import { Spinner } from './Spinner';
import { Button } from './Button';

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export function LoadingStatus() {
  return (
    <StatusContainer>
      <div>
        <Spinner />
      </div>
      <div>Loading</div>
    </StatusContainer>
  );
}

export function ErrorStatus({ message = '', onRetry }) {
  return (
    <StatusContainer>
      <div>{message}</div>
      <div>
        <Button onClick={onRetry}>Retry</Button>
      </div>
    </StatusContainer>
  );
}
