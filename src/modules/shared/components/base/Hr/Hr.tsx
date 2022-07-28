import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface HrProps {
  vertical?: boolean;
}

export const Hr = styled.hr(({ theme: { Colors } }) => [
  {
    margin: '0',
    padding: '0',
    border: 'none',
    height: '1px',
    background: Colors.neutral[300],
  },
]);
