import styled from 'styled-components';

import { DeviceSize } from 'src/modules/shared/theming/DeviceSize';

export const Heading2 = styled.h2`
  letter-spacing: 0;
  text-transform: uppercase;
  font: ${(props) => props.theme.Typography.title.l2.desktop};

  @media (max-width: ${DeviceSize.TABLET}) {
    font: ${(props) => props.theme.Typography.title.l2.mobile};
  }
`;
