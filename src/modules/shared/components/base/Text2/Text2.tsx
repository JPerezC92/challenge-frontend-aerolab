import styled from '@emotion/styled';

import {
  TextL2AllCaps,
  TextL2Default,
} from 'src/modules/shared/theming/sharedStyles/text/TextL2';

const enum Text2Variant {
  DEFAULT = 'default',
  ALL_CAPS = 'allCaps',
}

type Text2Props = {
  variant?: `${Text2Variant}`;
};

export const Text2Default = styled.p<Text2Props>`
  ${TextL2Default}
`;

export const Text2AllCaps = styled(Text2Default)`
  ${({ variant }) => variant === Text2Variant.ALL_CAPS && TextL2AllCaps}
`;

export const Text2 = styled(Text2AllCaps)``;
