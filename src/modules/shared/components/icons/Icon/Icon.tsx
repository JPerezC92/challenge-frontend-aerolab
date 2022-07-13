import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { DeviceSize } from 'src/modules/shared/theming/DeviceSize';

const enum IconSize {
  SM = 'sm',
  MD = 'md',
}

type IconStyledProps = {
  size?: `${IconSize}`;
};

export const IconDefault = styled.i<IconStyledProps>`
  line-height: 0;
  display: inline-block;
  vertical-align: middle;
`;

export const IconMD = styled(IconDefault)`
  ${({ size }) =>
    size === IconSize.MD &&
    css`
      svg {
        width: 32px;
        height: 32px;

        @media (max-width: ${DeviceSize.TABLET}) {
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

        @media (max-width: ${DeviceSize.TABLET}) {
          width: 20px;
          height: 20px;
        }
      }
    `}
`;

export const Icon = styled(IconSM)``;
