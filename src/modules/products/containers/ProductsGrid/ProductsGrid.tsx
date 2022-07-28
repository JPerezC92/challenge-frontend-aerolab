import styled from '@emotion/styled';
import React from 'react';
import { PaginationControls } from 'src/modules/products/components/PaginationControls';
import { ProductsQueryControls } from 'src/modules/products/components/ProductsQueryControls';
import { SortSelector } from 'src/modules/products/components/SortSelector';
import { ProductCard } from 'src/modules/products/containers/ProductCard';
import {
  ALL_PRODUCTS,
  FilterActionType,
} from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsFilterReducer';
import { PaginationActionType } from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsPaginationReducer';
import { ProductsQueryActionType } from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsQueryReducer';
import {
  SortActionType,
  SortBy,
} from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsSortReducer';
import { useQueryProducts } from 'src/modules/products/containers/ProductsGrid/useQueryProducts/useQueryProducts';
import { Product } from 'src/modules/products/models/Product';
import { Select } from 'src/modules/shared/components/base/Select';
import { Text1 } from 'src/modules/shared/components/base/Text1';
import { RecolorNeutral } from 'src/modules/shared/components/Recolor/Recolor';
import { MediaQuery } from 'src/modules/shared/theming/DeviceSize';

const sortFieldList = [
  { value: SortBy.MOST_RECENT, name: 'Most recent' },
  { value: SortBy.LOW_PRICE, name: 'Low price' },
  { value: SortBy.HIGH_PRICE, name: 'High price' },
];

const ProductsGridStyled = styled.ul({
  display: 'grid',
  rowGap: '3rem',
  columnGap: '1.5rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 19rem), 1fr))',
});

const SortContainerStyled = styled.div({
  display: 'flex',
  columnGap: '.25rem',
  flexWrap: 'nowrap',
  overflow: 'auto visible',
});

const ProductsGridFooterStyled = styled.footer({
  marginBlockStart: '4rem',
  display: 'grid',
  rowGap: '1.5rem',
  alignItems: 'center',
  justifyItems: 'center',

  [`@media (min-width: ${MediaQuery.DESKTOP.min})`]: {
    gridTemplateColumns: '1fr 1fr 1fr',

    ['& > div:first-of-type']: {
      gridColumn: '3/4',
      justifySelf: 'flex-end',
      gridRow: 1,
    },

    ['& > p:first-of-type']: { gridColumn: '1/4', gridRow: 1 },
  },
});

type ProductsGridProps = {
  productsDataSource: Product[];
  className?: string;
  skeleton?: React.ReactElement;
  onChangePage?: () => void;
};

export const ProductsGrid: React.FC<ProductsGridProps> = ({
  productsDataSource,
  skeleton,
  onChangePage,
}) => {
  const { products, pagination, filter, sort, queryDispatch } =
    useQueryProducts();

  React.useEffect(() => {
    if (!!productsDataSource.length) {
      queryDispatch({
        type: ProductsQueryActionType.LOAD_PRODUCTS_SOURCE,
        payload: productsDataSource,
      });
    }
  }, [productsDataSource, queryDispatch]);

  const paginationControl = (
    <PaginationControls
      currentPage={pagination.currentPage}
      pages={pagination.totalPages}
      hasNextPage={!!pagination.nextPage}
      hasPrevPage={!!pagination.prevPage}
      onNext={() => {
        queryDispatch({ type: PaginationActionType.NEXT });
        onChangePage?.();
      }}
      onPrev={() => {
        queryDispatch({ type: PaginationActionType.PREV });
        onChangePage?.();
      }}
    />
  );

  return (
    <>
      <ProductsQueryControls
        sortControl={
          <SortContainerStyled>
            {sortFieldList.map((field) => (
              <SortSelector
                key={field.name}
                id={field.value}
                label={field.name}
                name="sortField"
                value={field.value}
                checked={sort.fieldValue === field.value}
                onChange={(e) =>
                  queryDispatch({
                    type: SortActionType,
                    payload: { by: e.target.value as SortBy },
                  })
                }
              />
            ))}
          </SortContainerStyled>
        }
        paginationControl={paginationControl}
        filterControl={
          <Select
            value={filter.fieldValue}
            onChange={(e) => {
              queryDispatch({
                type: FilterActionType,
                payload: e.currentTarget.value,
              });
            }}
            options={[ALL_PRODUCTS, ...filter.categoryList]}
          />
        }
      />

      {!!productsDataSource.length ? (
        <ProductsGridStyled>
          {products.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ProductsGridStyled>
      ) : (
        skeleton
      )}

      <ProductsGridFooterStyled>
        {paginationControl}

        <Text1 brand>
          {products.length} of {productsDataSource.length}
          <RecolorNeutral shade={600}> products</RecolorNeutral>
        </Text1>
      </ProductsGridFooterStyled>
    </>
  );
};
