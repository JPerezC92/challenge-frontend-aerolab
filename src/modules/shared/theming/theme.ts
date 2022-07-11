import { Colors } from "./Colors";
import { FontFamily } from "./FontFamily";

export const theme = {
  typography: {
    desktop: {
      l1: `900 200px/80% ${FontFamily.MONSERAT}`,
      l2: `900 48px/80% ${FontFamily.MONSERAT}`,
    },
    mobile: {
      l1: `900 96px/80% ${FontFamily.MONSERAT}`,
      l2: `900 32px/80% ${FontFamily.MONSERAT}`,
    },
  },
  Colors,
} as const;

export type InternalTheme = typeof theme;
