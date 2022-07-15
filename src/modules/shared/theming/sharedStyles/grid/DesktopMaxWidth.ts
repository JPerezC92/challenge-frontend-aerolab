import { css } from '@emotion/react';
import { SharedStyles } from 'src/modules/shared/theming/sharedStyles/SharedStyles';

export const DesktopMaxWidth: SharedStyles = ({ theme: { Grid } }) => css`
  max-width: ${Grid.maxWidth};
  margin: 0 auto;
`;
