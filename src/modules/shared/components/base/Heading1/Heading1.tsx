import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TitleL1 } from 'src/modules/shared/theming/sharedStyles/title/TitleL1';

export const Heading1 = styled.h1`
  ${TitleL1}

  ${({ theme: { Colors, Typography } }) => css`
    letter-spacing: 0;
    text-transform: uppercase;
    color: ${Colors.neutral[900]};
    font: ${Typography.title.l1.desktop};

    & > em {
      background-image: ${Colors.brand.default};
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`;
