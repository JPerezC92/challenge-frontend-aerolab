import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColorBrandDefault } from 'src/modules/shared/theming/sharedStyles/colors/Brand';

import { TitleL1 } from 'src/modules/shared/theming/sharedStyles/title/TitleL1';

export const Heading1 = styled.h1`
  ${TitleL1}

  ${({ theme: { Colors, Typography } }) => css`
    color: ${Colors.neutral[900]};
    font: ${Typography.title.l1.desktop};
  `}
  
  letter-spacing: 0;
  text-transform: uppercase;

  & > em {
    ${ColorBrandDefault}
  }
`;
