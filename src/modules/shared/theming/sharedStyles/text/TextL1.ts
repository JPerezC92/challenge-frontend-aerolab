import { css } from '@emotion/react';
import { SharedStyles } from 'src/modules/shared/theming/sharedStyles/SharedStyles';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';

export const TextL1Default: SharedStyles = ({ theme: { Typography } }) => css`
  font: ${Typography.text.l1.default.desktop};
  letter-spacing: normal;
  text-transform: none;

  @media (max-width: ${MediaQuery.TABLET.max}) {
    font: ${Typography.text.l1.default.mobile};
  }
`;

export const TextL1AllCaps: SharedStyles = ({ theme: { Typography } }) => css`
  font: ${Typography.text.l1.allCaps.desktop};
  letter-spacing: 0.24rem;
  text-transform: uppercase;

  @media (max-width: ${MediaQuery.TABLET.max}) {
    font: ${Typography.text.l1.allCaps.mobile};
  }
`;

export const TextL1LightWeight: SharedStyles = ({
  theme: { Typography },
}) => css`
  font: ${Typography.text.l1.lineWeight.desktop};
  letter-spacing: normal;
  text-transform: none;

  @media (max-width: ${MediaQuery.TABLET.max}) {
    font: ${Typography.text.l1.lineWeight.mobile};
  }
`;
