import React from 'react';

import {
  initialProductsFilterState,
  productsFilterReducer,
} from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsFilterReducer';
import {
  initialSortState,
  productsSortReducer,
} from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsSortReducer';
import { combineReducers } from 'src/modules/shared/utils/combineReducers';
import {
  initialPaginationState,
  productsPaginationReducer,
} from './ProductsPaginationReducer';
import {
  productsQueryReducer,
  ProductsQueryState,
} from './ProductsQueryReducer';

const initialState: ProductsQueryState = {
  ...initialPaginationState,
  ...initialSortState,
  ...initialProductsFilterState,
  value: [],
  results: [],
};

export function useQueryProducts() {
  const [queryState, queryDispatch] = React.useReducer(
    combineReducers(
      productsQueryReducer,
      productsFilterReducer,
      productsSortReducer,
      productsPaginationReducer
    ),
    initialState
  );

  return {
    products: queryState.results,
    filter: {
      categoryList: queryState.categoryList,
      fieldValue: queryState.filterFieldValue,
    },
    sort: { fieldValue: queryState.sortFieldValue },
    pagination: {
      totalPages: queryState.totalPages,
      currentPage: queryState.currentPage,
      prevPage: queryState.prevPage,
      nextPage: queryState.nextPage,
    },
    queryDispatch,
  };
}
