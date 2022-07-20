import styled from '@emotion/styled';
import React from 'react';

import { Text1 } from 'src/modules/shared/components/base/Text1';
import { RecolorNeutral } from 'src/modules/shared/components/Recolor/Recolor';
import { ChevronLeft } from 'src/modules/shared/icons/ChevronLeft';
import { ChevronRight } from 'src/modules/shared/icons/ChevronRight';
import { Icon } from 'src/modules/shared/icons/Icon';
import { BackgroundBrandLight } from 'src/modules/shared/theming/sharedStyles/backgrounds/BackgroundBrandDefault';
import { ColorNeutral600 } from 'src/modules/shared/theming/sharedStyles/colors/Neutrals';
import { TextL1Default } from 'src/modules/shared/theming/sharedStyles/text/TextL1';

const PaginationControlsStyled = styled.div(({ theme: { Colors } }) => [
  ColorNeutral600,
  {
    alignItems: 'center',
    border: `1px solid ${Colors.neutral[300]}`,
    borderRadius: '1rem',
    columnGap: '1.5rem',
    display: 'flex',
    paddingBlock: '.75rem',
    paddingInline: '1rem',
    whiteSpace: 'nowrap',
    justifyContent: 'space-evenly',
  },
]);

const PaginationButtonStyled = styled.button([
  TextL1Default,
  BackgroundBrandLight,

  ({ theme: { Colors } }) => ({
    border: 'none',
    borderRadius: '.5rem',
    padding: '.5rem',
    lineHeight: 0,

    ['&[disabled]']: {
      background: Colors.neutral[200],
      pointerEvents: 'none',
      ['i']: { opacity: '.2' },
    },

    ['&:hover , &:active']: [{ background: Colors.brand.light2 }],
  }),
]);

type PaginatorProps = {
  className?: string;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  pages: number;
  onNext: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onPrev: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const PaginationControls: React.FC<PaginatorProps> = ({
  onNext,
  onPrev,
  currentPage,
  hasNextPage,
  hasPrevPage,
  pages,
}) => {
  return (
    <PaginationControlsStyled>
      <PaginationButtonStyled
        type="button"
        disabled={!hasPrevPage}
        onClick={onPrev}
      >
        <Icon size="sm">
          <ChevronLeft />
        </Icon>
      </PaginationButtonStyled>

      <Text1 brand>
        <RecolorNeutral shade={600}>Page</RecolorNeutral> {currentPage} of{' '}
        {pages}
      </Text1>

      <PaginationButtonStyled
        type="button"
        disabled={!hasNextPage}
        onClick={onNext}
      >
        <Icon size="sm">
          <ChevronRight />
        </Icon>
      </PaginationButtonStyled>
    </PaginationControlsStyled>
  );
};
