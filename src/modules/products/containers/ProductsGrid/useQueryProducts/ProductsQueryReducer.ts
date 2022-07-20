import {
  PaginationAction,
  PaginationState,
} from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsPaginationReducer';
import {
  ProductsFilterAction,
  ProductsFilterState,
} from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsFilterReducer';
import {
  SortAction,
  SortState,
} from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsSortReducer';
import { Product } from 'src/modules/products/models/Product';

export const enum ProductsQueryActionType {
  LOAD_PRODUCTS_SOURCE = 'LOAD_PRODUCTS_SOURCE',
}

export interface ProductsQueryState
  extends PaginationState,
    SortState,
    ProductsFilterState {
  value: Product[];
  results: Product[];
}

type BaseAction = {
  type: ProductsQueryActionType.LOAD_PRODUCTS_SOURCE;
  payload: Product[];
};

export type ProductsQueryAction =
  | BaseAction
  | PaginationAction
  | SortAction
  | ProductsFilterAction;

export interface ProductsQueryReducer {
  (state: ProductsQueryState, action: ProductsQueryAction): ProductsQueryState;
}

export const productsQueryReducer: ProductsQueryReducer = (
  state: ProductsQueryState,
  action: ProductsQueryAction
): ProductsQueryState => {
  if (action.type === ProductsQueryActionType.LOAD_PRODUCTS_SOURCE) {
    return {
      ...state,
      value: [...action.payload],
      results: [...action.payload],
    };
  }

  return { ...state };
};
