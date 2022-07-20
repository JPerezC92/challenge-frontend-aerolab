import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Hr = styled.hr`
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: none;
  width: 1px;
  ${({ theme: { Colors } }) =>
    css`
      background-color: ${Colors.neutral[300]};
    `};
`;
