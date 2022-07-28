const BrandColors = {
  blueDress: '#176FEB',
  fuchsiaPink: '#FF80FF',
  blueEyes: '#1667D9',
  violet: '#F279F2',
};

const SpecialColors = {
  cornflowerBlue: '#7296EB',
  electricLavender: '#EAC0E9',
  blueDress: BrandColors.blueDress,
  fuchsiaPink: BrandColors.fuchsiaPink,
};

export const Colors = {
  neutral: {
    0: '#FFFFFF',
    100: '#F5F9FF',
    200: '#E6EDF7',
    300: '#DAE4F2',
    500: '#8FA3BF',
    600: '#7C899C',
    900: '#252F3D',
  },
  green: {
    default: '#29CC74',
    light: '#CCFFE3',
  },
  red: {
    default: '#E07F4F',
    light: '#FFDFD9',
  },
  brand: {
    default: `linear-gradient(102.47deg, ${BrandColors.blueDress}, ${BrandColors.fuchsiaPink})`,
    hover: `linear-gradient(102.47deg, ${BrandColors.blueEyes}, ${BrandColors.violet})`,
    light: '#E5F0FF',
    light2: '#CCE1FF',
  },
  specials: {
    bg: {
      illustration: `linear-gradient(102.47deg, ${SpecialColors.cornflowerBlue}, ${SpecialColors.electricLavender}, ${SpecialColors.electricLavender})`,
      section: `linear-gradient(102.47deg, ${SpecialColors.blueDress}, ${SpecialColors.fuchsiaPink})`,
    },
  },
};
