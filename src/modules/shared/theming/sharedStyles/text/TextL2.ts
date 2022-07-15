import { css } from '@emotion/react';

import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';
import { SharedStyles } from 'src/modules/shared/theming/sharedStyles/SharedStyles';

export const TextL2Default: SharedStyles = ({ theme: { Typography } }) => css`
  font: ${Typography.text.l2.default.desktop};
  letter-spacing: normal;
  text-transform: none;

  @media (max-width: ${MediaQuery.TABLET.max}) {
    font: ${Typography.text.l2.default.mobile};
  } ;
`;

export const TextL2AllCaps: SharedStyles = ({ theme: { Typography } }) => css`
  font: ${Typography.text.l2.allCaps.desktop};
  letter-spacing: 0.05rem;
  text-transform: uppercase;

  @media (max-width: ${MediaQuery.TABLET.max}) {
    font: ${Typography.text.l2.allCaps.mobile};
  } ;
`;
