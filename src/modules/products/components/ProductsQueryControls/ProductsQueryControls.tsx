import styled from '@emotion/styled';
import React from 'react';
import { Hr } from 'src/modules/shared/components/base/Hr';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';
import { ColorNeutral600 } from 'src/modules/shared/theming/sharedStyles/colors/Neutrals';

const ProductsQueryControlsStyled = styled.div`
  display: flex;
  row-gap: 1.5rem;
  justify-content: space-between;
  margin-block-end: 4rem;

  @media (max-width: ${MediaQuery.TABLET.max}) {
    flex-direction: column;
  }
`;

const Filter$SortWrapperStyled = styled.div`
  ${ColorNeutral600}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 1.5rem;
  /* overflow: auto visible; */
  column-gap: 2.5rem;

  & > hr {
    align-self: stretch;
  }

  @media (max-width: ${MediaQuery.DESKTOP.max}) {
    & > hr {
      display: none;
    }
  }
`;

const FilterSortContainerStyled = styled.div({
  label: 'FilterSortContainerStyled',
  display: 'flex',
  whiteSpace: 'nowrap',
  alignItems: 'center',
  columnGap: '1rem',
  [`@media (max-width: ${MediaQuery.MOBILE.max})`]: { width: '100%' },
  [`@media (max-width: ${MediaQuery.DESKTOP.max})`]: {
    [`& > span`]: { display: 'none' },
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
      <Filter$SortWrapperStyled>
        <FilterSortContainerStyled>
          <Text1 as="span">Filter by:</Text1> {filterControl}
        </FilterSortContainerStyled>

        <Hr />

        <FilterSortContainerStyled>
          <Text1 as="span">Sort by:</Text1> {sortControl}
        </FilterSortContainerStyled>
      </Filter$SortWrapperStyled>

      <PaginationContainer>{paginationControl}</PaginationContainer>
    </ProductsQueryControlsStyled>
  );
};
