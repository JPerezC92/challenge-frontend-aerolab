import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorBrandDefault } from 'src/modules/shared/theming/sharedStyles/colors/Brand';
import * as TextL1 from 'src/modules/shared/theming/sharedStyles/text/TextL1';

const enum Text1Variant {
  DEFAULT = 'default',
  ALL_CAPS = 'allCaps',
  LIGHT_WEIGHT = 'lineWeight',
}

type Text1Props = {
  variant?: `${Text1Variant}`;
  brand?: boolean;
};

const Text1Default = styled.p<Text1Props>`
  ${TextL1.TextL1Default}

  ${({ brand }) => brand && ColorBrandDefault}
`;

const Text1AllCaps = styled(Text1Default)`
  ${({ variant }) => variant === Text1Variant.ALL_CAPS && TextL1.TextL1AllCaps};
`;

const Text1LightWeight = styled(Text1AllCaps)`
  ${({ variant }) =>
    variant === Text1Variant.LIGHT_WEIGHT && TextL1.TextL1LightWeight};
`;

export const Text1 = styled(Text1LightWeight)``;
