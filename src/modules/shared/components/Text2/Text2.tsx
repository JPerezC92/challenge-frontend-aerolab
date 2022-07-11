import styled, { css } from 'styled-components';
import { DeviceSize } from '../../theming/DeviceSize';

const enum Text2Variant {
  DEFAULT = 'default',
  ALL_CAPS = 'allCaps',
}

type Text2Props = {
  variant?: `${Text2Variant}`;
};

export const Text2Default = styled.p<Text2Props>`
  ${({ theme: { Typography } }) => css`
    font: ${Typography.text.l2.default.desktop};
    letter-spacing: 0;
    text-transform: none;

    @media (max-width: ${DeviceSize.TABLET}) {
      font: ${Typography.text.l2.default.mobile};
    } ;
  `}
`;

export const Text2AllCaps = styled(Text2Default)`
  ${({ variant, theme: { Typography } }) =>
    variant === Text2Variant.ALL_CAPS &&
    css`
      font: ${Typography.text.l2.allCaps.desktop};
      letter-spacing: 0.05rem;
      text-transform: uppercase;

      @media (max-width: ${DeviceSize.TABLET}) {
        font: ${Typography.text.l2.allCaps.mobile};
      } ;
    `}
`;

export const Text2 = styled(Text2AllCaps)``;
