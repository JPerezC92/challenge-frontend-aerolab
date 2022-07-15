import { css } from '@emotion/react';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';
import { SharedStyles } from 'src/modules/shared/theming/sharedStyles/SharedStyles';

export const TitleL3: SharedStyles = ({ theme: { Typography } }) => css`
  letter-spacing: 0;
  text-transform: uppercase;
  font: ${Typography.title.l3.desktop};

  @media (max-width: ${MediaQuery.TABLET.max}) {
    font: ${Typography.title.l3.mobile};
  }
`;
