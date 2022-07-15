import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TextL1Default } from 'src/modules/shared/theming/sharedStyles/text/TextL1';

const enum ButtonVariant {
  UNSTYLED = 'unstyled',
}

type ButtonProps = {
  variant?: `${ButtonVariant}`;
};

export const ButtonDefault = styled.button<ButtonProps>`
  ${TextL1Default}
  align-items: center;
  border-radius: 1rem;
  border: none;
  column-gap: 0.5rem;
  display: flex;
  justify-content: center;
  padding-block: 0.75rem;
  padding-inline: 2.5rem;

  ${({ theme: { Colors } }) =>
    css`
      background: ${Colors.brand.default};
      color: ${Colors.neutral[100]};

      &:hover {
        background: ${Colors.brand.hover};
      }
    `}
`;

export const ButtonUnstyled = styled(ButtonDefault)`
  ${({ variant }) =>
    variant === ButtonVariant.UNSTYLED &&
    css`
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      line-height: 0;

      &:hover {
        background: transparent;
      }
    `}
`;

export const Button = styled(ButtonUnstyled)``;
