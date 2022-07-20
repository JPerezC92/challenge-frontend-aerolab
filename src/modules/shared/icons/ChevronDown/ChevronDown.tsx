import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ChevronRight } from 'src/modules/shared/icons/ChevronRight';

type ArrowProps = {
  className?: string;
  open: boolean;
};

export const ChevronDown = styled(ChevronRight)<ArrowProps>`
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
