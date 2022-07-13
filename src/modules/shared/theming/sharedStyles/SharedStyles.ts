import { SerializedStyles } from '@emotion/react';
import { InternalTheme } from 'src/modules/shared/theming/theme';

export interface SharedStyles {
  (props: { theme: InternalTheme }): SerializedStyles;
}
