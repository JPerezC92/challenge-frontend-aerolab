import { css } from '@emotion/react';
import { SharedStyles } from 'src/modules/shared/theming/sharedStyles/SharedStyles';

export const BackgroundNeutral0: SharedStyles = ({ theme: { Colors } }) =>
  css({ background: Colors.neutral[0] });
