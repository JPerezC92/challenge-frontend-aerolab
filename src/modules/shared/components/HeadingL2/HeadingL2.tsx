import styled from "styled-components";

import { DeviceSize } from "src/modules/shared/theming/DeviceSize";

export const HeadingL2 = styled.h2`
  letter-spacing: 0;
  text-transform: uppercase;
  font: ${(props) => props.theme.typography.mobile.l2};

  @media (min-width: ${DeviceSize.TABLET}) {
    font: ${(props) => props.theme.typography.desktop.l2};
  }
`;
