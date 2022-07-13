import { css } from '@emotion/react';

import { SharedStyles } from 'src/modules/shared/theming/sharedStyles/SharedStyles';

const ClipText = css`
  background-clip: text;
  color: transparent;
`;

export const ColorBrandDefault: SharedStyles = ({ theme: { Colors } }) => css`
  background: ${Colors.brand.default};
  ${ClipText}
`;

export const ColorBrandHover: SharedStyles = ({ theme: { Colors } }) => css`
  background: ${Colors.brand.hover};
  ${ClipText}
`;
