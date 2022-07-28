import { css } from '@emotion/react';
import { SharedStyles } from 'src/modules/shared/theming/sharedStyles/SharedStyles';

export const ColorNeutral600: SharedStyles = ({ theme: { Colors } }) =>
  css({
    color: Colors.neutral[600],
  });

export const ColorNeutral100: SharedStyles = ({ theme: { Colors } }) =>
  css({
    color: Colors.neutral[100],
  });
