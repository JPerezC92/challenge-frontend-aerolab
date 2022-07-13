import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ChevronDefault } from 'src/modules/shared/components/icons/ChevronDefault';

type ArrowProps = {
  className?: string;
  open: boolean;
};

export const Arrow = styled(ChevronDefault)<ArrowProps>`
  ${({ open = false }) =>
    css`
      transition: transform 0.2s ease-out;
      transform: rotate(-90deg);

      ${open &&
      css`
        transform: rotate(90deg);
      `}
    `};
`;
