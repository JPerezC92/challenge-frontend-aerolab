import { css } from '@emotion/react';

import { DeviceSize } from 'src/modules/shared/theming/DeviceSize';
import { SharedStyles } from 'src/modules/shared/theming/sharedStyles/SharedStyles';

export const TitleL1: SharedStyles = ({ theme: { Colors, Typography } }) => css`
  letter-spacing: 0;
  text-transform: uppercase;
  color: ${Colors.neutral[900]};
  font: ${Typography.title.l1.desktop};

  @media (max-width: ${DeviceSize.TABLET}) {
    font: ${Typography.title.l1.mobile};
  }
`;
