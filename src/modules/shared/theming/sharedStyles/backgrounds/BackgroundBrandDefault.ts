import { css } from '@emotion/react';
import { SharedStyles } from 'src/modules/shared/theming/sharedStyles/SharedStyles';

export const BackgroundBrandDefault: SharedStyles = ({
  theme: { Colors },
}) => css`
  background: ${Colors.brand.default};
`;

export const BackgroundSpecialIllustration: SharedStyles = ({
  theme: { Colors },
}) => css`
  background: ${Colors.specials.bg.illustration};
`;

export const BackgroundBrandLight: SharedStyles = ({ theme: { Colors } }) =>
  css({
    background: Colors.brand.light,
  });

export const BackgroundBrandLight2: SharedStyles = ({ theme: { Colors } }) =>
  css({
    background: Colors.brand.light2,
  });
