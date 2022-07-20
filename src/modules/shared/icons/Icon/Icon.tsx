import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';

const enum IconSize {
  SM = 'sm',
  MD = 'md',
}

type IconStyledProps = {
  size?: `${IconSize}`;
  background?: boolean;
};

export const IconDefault = styled.i<IconStyledProps>`
  line-height: 0;
  display: inline-block;
  vertical-align: middle;
`;

export const IconBackground = styled(IconDefault)`
  ${({ background, theme: { Colors } }) =>
    background &&
    css`
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: ${Colors.brand.light};
    `}
`;

export const IconMD = styled(IconBackground)`
  ${({ size }) =>
    size === IconSize.MD &&
    css`
      svg {
        width: 32px;
        height: 32px;

        @media (max-width: ${MediaQuery.TABLET.max}) {
          width: 24px;
          height: 24px;
        }
      }
    `}
`;

export const IconSM = styled(IconMD)`
  ${({ size }) =>
    size === IconSize.SM &&
    css`
      svg {
        width: 24px;
        height: 24px;

        @media (max-width: ${MediaQuery.TABLET.max}) {
          width: 20px;
          height: 20px;
        }
      }
    `}
`;

export const Icon = styled(IconSM)``;
