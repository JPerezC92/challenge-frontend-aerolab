import styled from 'styled-components';

import { DeviceSize } from 'src/modules/shared/theming/DeviceSize';

export const HeadingL1 = styled.h1`
  letter-spacing: 0;
  text-transform: uppercase;
  color: ${({ theme: { Colors } }) => Colors.neutral[900]};
  font: ${({ theme: { typography } }) => typography.mobile.l1};

  & > em {
    background-image: ${({ theme: { Colors } }) => Colors.brand.default};
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: ${DeviceSize.TABLET}) {
    font: ${(props) => props.theme.typography.desktop.l1};
  }
`;
