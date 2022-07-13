import { InternalTheme } from 'src/modules/shared/theming/theme';

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends InternalTheme {}
}
