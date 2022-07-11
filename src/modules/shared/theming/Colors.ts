const BrandColors = {
  blueDress: "#176FEB",
  fuchsiaPink: "#FF80FF",
  blueEyes: "#1667D9",
  violet: "#F279F2",
};

export const Colors = {
  neutral: {
    0: "#FFFFF",
    100: "#F5F9FF",
    200: "#E6EDF7",
    300: "#252F3D",
    500: "#8FA3BF",
    600: "#7C899C",
    900: "#252F3D",
  },
  green: {
    default: "#29CC74",
    light: "#CCFFE3",
  },
  red: {
    default: "#E07F4F",
    light: "#FFDFD9",
  },
  brand: {
    default: `linear-gradient(102.47deg, ${BrandColors.blueDress} -5.34%, ${BrandColors.fuchsiaPink} 106.58%)`,
    hover: `linear-gradient(102.47deg, ${BrandColors.blueEyes} -5.34%, ${BrandColors.violet} 106.58%)`,
    light: "#E5F0FF",
    light2: "#CCE1FF",
  },
};
