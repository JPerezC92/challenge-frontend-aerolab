import styled, { css } from 'styled-components';

import { DeviceSize } from 'src/modules/shared/theming/DeviceSize';

export const Heading1 = styled.h1`
  ${({ theme: { Colors, Typography } }) => css`
    letter-spacing: 0;
    text-transform: uppercase;
    color: ${Colors.neutral[900]};
    font: ${Typography.title.l1.desktop};

    & > em {
      background-image: ${Colors.brand.default};
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: ${DeviceSize.TABLET}) {
      font: ${({ theme: { Typography } }) => Typography.title.l1.mobile};
    }
  `}
`;
