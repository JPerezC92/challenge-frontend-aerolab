export const Breakpoints = {
  MOBILE: { min: 0, max: 375 },
  TABLET: { min: 376, max: 1024 },
  DESKTOP: { min: 1025, max: 1464 },
} as const;

export const MediaQuery = {
  MOBILE: { min: '0px', max: '375px' },
  TABLET: { min: '376px', max: '1024px' },
  DESKTOP: { min: '1025px', max: '1464px' },
};
