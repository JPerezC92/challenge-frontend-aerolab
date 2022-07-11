import { Colors } from './Colors';
import { FontFamily } from './FontFamily';

export const theme = {
  Typography: {
    title: {
      l1: {
        desktop: `900 200px/80% ${FontFamily.MONSERAT}`,
        mobile: `900 96px/80% ${FontFamily.MONSERAT}`,
      },
      l2: {
        desktop: `900 48px/80% ${FontFamily.MONSERAT}`,
        mobile: `900 32px/80% ${FontFamily.MONSERAT}`,
      },
      l3: {
        desktop: `900 32px/100% ${FontFamily.MONSERAT}`,
        mobile: `900 24px/100% ${FontFamily.MONSERAT}`,
      },
    },
    text: {
      l1: {
        default: {
          desktop: `600 18px/150% ${FontFamily.MONSERAT}`,
          mobile: `600 16px/150% ${FontFamily.MONSERAT}`,
        },
        allCaps: {
          desktop: `600 18px/150% ${FontFamily.MONSERAT}`,
          mobile: `600 16px/150% ${FontFamily.MONSERAT}`,
        },
        lineWeight: {
          desktop: `500 18px/150% ${FontFamily.MONSERAT}`,
          mobile: `500 16px/150% ${FontFamily.MONSERAT}`,
        },
      },
      l2: {
        default: {
          desktop: `600 14px/150% ${FontFamily.MONSERAT}`,
          mobile: `600 12px/150% ${FontFamily.MONSERAT}`,
        },
        allCaps: {
          desktop: `600 14px/150% ${FontFamily.MONSERAT}`,
          mobile: `600 12px/150% ${FontFamily.MONSERAT}`,
        },
      },
    },
  },
  Colors,
} as const;

export type InternalTheme = typeof theme;
