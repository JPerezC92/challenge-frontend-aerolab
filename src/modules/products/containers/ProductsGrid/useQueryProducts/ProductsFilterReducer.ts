import { ProductsQueryActionType } from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsQueryReducer';
import { Product } from 'src/modules/products/models/Product';

export const ALL_PRODUCTS = 'All products';

export interface ProductsFilterState {
  value: Product[];
  results: Product[];
  categoryList: string[];
  filterFieldValue: string;
}

export const FilterActionType = 'FILTER';

export type ProductsFilterAction =
  | { type: ProductsQueryActionType.LOAD_PRODUCTS_SOURCE; payload: Product[] }
  | { type: typeof FilterActionType; payload: typeof ALL_PRODUCTS | string };

export const initialProductsFilterState: ProductsFilterState = {
  results: [],
  value: [],
  categoryList: [],
  filterFieldValue: ALL_PRODUCTS,
};

export const productsFilterReducer = (
  state: ProductsFilterState,
  action: ProductsFilterAction
): ProductsFilterState => {
  if (action.type === ProductsQueryActionType.LOAD_PRODUCTS_SOURCE) {
    return {
      ...state,
      categoryList: Array.from(new Set(action.payload.map((v) => v.category))),
    };
  }

  if (action.type === FilterActionType && action.payload === ALL_PRODUCTS) {
    return {
      ...state,
      filterFieldValue: ALL_PRODUCTS,
      results: [...state.value],
    };
  }

  if (action.type === FilterActionType && action.payload !== ALL_PRODUCTS) {
    return {
      ...state,
      filterFieldValue: action.payload,
      results: state.value.filter((v) => v.category === action.payload),
    };
  }

  const results =
    state.filterFieldValue === ALL_PRODUCTS
      ? [...state.value]
      : state.categoryList.includes(state.filterFieldValue)
      ? state.value.filter((v) => v.category === state.filterFieldValue)
      : [...state.results];

  return {
    ...state,
    results,
  };
};
