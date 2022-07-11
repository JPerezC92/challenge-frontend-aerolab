import styled, { css } from 'styled-components';

import { DeviceSize } from 'src/modules/shared/theming/DeviceSize';

const enum Text1Variant {
  DEFAULT = 'default',
  ALL_CAPS = 'allCaps',
  LIGHT_WEIGHT = 'lineWeight',
}

type Text1Props = {
  variant?: `${Text1Variant}`;
};

const Text1Default = styled.p<Text1Props>`
  ${({ theme: { Typography } }) => css`
    font: ${Typography.text.l1.default.desktop};
    letter-spacing: initial;
    text-transform: none;

    @media (max-width: ${DeviceSize.TABLET}) {
      font: ${Typography.text.l1.default.mobile};
    }
  `};
`;

const Text1AllCaps = styled(Text1Default)`
  ${({ variant, theme: { Typography } }) =>
    variant === Text1Variant.ALL_CAPS &&
    css`
      font: ${Typography.text.l1.allCaps.desktop};
      letter-spacing: 0.24rem;
      text-transform: uppercase;

      @media (max-width: ${DeviceSize.TABLET}) {
        font: ${Typography.text.l1.allCaps.mobile};
      }
    `};
`;

const Text1LightWeight = styled(Text1AllCaps)`
  ${({ variant, theme: { Typography } }) =>
    variant === Text1Variant.LIGHT_WEIGHT &&
    css`
      font: ${Typography.text.l1.lineWeight.desktop};
      letter-spacing: initial;
      text-transform: none;

      @media (max-width: ${DeviceSize.TABLET}) {
        font: ${Typography.text.l1.lineWeight.mobile};
      }
    `};
`;

export const Text1 = styled(Text1LightWeight)``;
