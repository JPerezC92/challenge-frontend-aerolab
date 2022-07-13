import styled from '@emotion/styled';

export const Hr = styled.hr`
  margin: 0;
  padding: 0;

  border-top: 1px solid ${({ theme: { Colors } }) => Colors.neutral[300]};
`;
