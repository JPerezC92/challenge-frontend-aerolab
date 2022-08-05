import styled from '@emotion/styled';
import React from 'react';

import { Hr } from 'src/modules/shared/components/base/Hr';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';
import { ColorNeutral600 } from 'src/modules/shared/theming/sharedStyles/colors/Neutrals';

const ProductsQueryControlsStyled = styled.div(() => [
  {
    display: 'flex',
    rowGap: '1.5rem',
    columnGap: '1.5rem',
    justifyContent: 'space-between',
    marginBlockEnd: '4rem',
    [`@media (max-width: ${MediaQuery.TABLET.max})`]: {
      flexDirection: 'column',
    },
  },
]);

const FilterSortWrapperStyled = styled.div([
  ColorNeutral600,
  {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    rowGap: '1.5rem',
    columnGap: '2.5rem',
    ['& >' + `${Hr}`]: {
      alignSelf: 'stretch',
      width: '2px',
      height: '100%',
    },
    [`@media (max-width: ${MediaQuery.DESKTOP.max})`]: {
      ['& >' + `${Hr}`]: {
        display: 'none',
      },
    },
  },
]);

const FilterSortContainerStyled = styled.div({
  display: 'flex',
  whiteSpace: 'nowrap',
  alignItems: 'center',
  columnGap: '1rem',
  maxWidth: '100%',
  [`@media (max-width: ${MediaQuery.MOBILE.max})`]: { width: '100%' },
  [`@media (max-width: ${MediaQuery.DESKTOP.max})`]: {
    [`& >` + `${Text1}`]: { display: 'none' },
  },
});

const PaginationContainer = styled.div({
  [`@media (max-width: ${MediaQuery.TABLET.max})`]: {
    display: 'none',
  },
});

type ProductsQueryControlsProps = {
  className?: string;
  filterControl: React.ReactElement;
  sortControl: React.ReactElement;
  paginationControl: React.ReactElement;
};

export const ProductsQueryControls: React.FC<ProductsQueryControlsProps> = ({
  filterControl,
  paginationControl,
  sortControl,
  className,
}) => {
  return (
    <ProductsQueryControlsStyled className={className}>
      <FilterSortWrapperStyled>
        <FilterSortContainerStyled>
          <Text1 as="span">Filter by:</Text1> {filterControl}
        </FilterSortContainerStyled>

        <Hr />

        <FilterSortContainerStyled>
          <Text1 as="span">Sort by:</Text1> {sortControl}
        </FilterSortContainerStyled>
      </FilterSortWrapperStyled>

      <PaginationContainer>{paginationControl}</PaginationContainer>
    </ProductsQueryControlsStyled>
  );
};
