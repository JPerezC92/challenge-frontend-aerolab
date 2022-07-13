import { css } from '@emotion/react';
import styled from '@emotion/styled';

type MenuProps = {
  className?: string;
  isOpen: boolean;
};

export const Menu = styled.menu<MenuProps>`
  ${({ isOpen, theme: { Colors } }) => css`
    background-color: ${Colors.neutral[0]};
    min-width: 100%;
    min-height: 100%;

    display: ${isOpen ? 'initial' : 'none'};
  `}
`;
