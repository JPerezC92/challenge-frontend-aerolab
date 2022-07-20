import { FilterActionType } from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsFilterReducer';
import { ProductsQueryActionType } from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsQueryReducer';
import { SortActionType } from 'src/modules/products/containers/ProductsGrid/useQueryProducts/ProductsSortReducer';
import { Product } from 'src/modules/products/models/Product';
import { Breakpoints } from 'src/modules/shared/theming/DeviceSize';

export interface PaginationState {
  value: Product[];
  results: Product[];
  limit: number;
  totalPages: number;
  currentPage: number;
  prevPage?: number;
  nextPage?: number;
}

export const enum PaginationActionType {
  NEXT = 'NEXT',
  PREV = 'PREV',
}

export type PaginationAction =
  | { type: `${PaginationActionType}` }
  | { type: ProductsQueryActionType.LOAD_PRODUCTS_SOURCE; payload: Product[] }
  | { type: typeof FilterActionType }
  | { type: typeof SortActionType };

export const initialPaginationState: PaginationState = {
  currentPage: 1,
  limit: 0,
  totalPages: 0,
  value: [],
  results: [],
};

export const productsPaginationReducer = (
  state: PaginationState,
  action: PaginationAction
): PaginationState => {
  if (action.type === ProductsQueryActionType.LOAD_PRODUCTS_SOURCE) {
    const { currentPage = 1 } = state;
    const { payload: productList } = action;

    const limit = Breakpoints.DESKTOP.min <= window.innerWidth ? 16 : 8;
    const totalPages = Math.ceil(productList.length / limit);
    const nextPage = currentPage < totalPages ? currentPage + 1 : undefined;

    return {
      ...state,
      limit,
      totalPages,
      nextPage,
      results: productList.slice(0, limit),
    };
  }

  if (action.type === PaginationActionType.NEXT) {
    const { results, totalPages, limit } = state;

    const newCurrentPage = state.nextPage || 1;
    const sliceStart = state.currentPage * limit;
    const sliceEnd = sliceStart + limit;
    const nextPage =
      newCurrentPage < totalPages ? newCurrentPage + 1 : undefined;
    const prevPage = newCurrentPage - 1;

    return {
      ...state,
      nextPage,
      prevPage,
      currentPage: newCurrentPage,
      results: results.slice(sliceStart, sliceEnd),
    };
  }

  if (action.type === PaginationActionType.PREV) {
    const { results, totalPages, limit } = state;

    if (!state.prevPage) return { ...state };

    const newCurrentPage = state.prevPage;
    const sliceStart = (newCurrentPage - 1) * limit;
    const sliceEnd = sliceStart + limit;
    const hasPrevPage = newCurrentPage > 1;
    const hasNextPage = newCurrentPage < totalPages;
    const nextPage = hasNextPage ? newCurrentPage + 1 : undefined;
    const prevPage = hasPrevPage ? newCurrentPage - 1 : undefined;

    return {
      ...state,
      nextPage,
      prevPage,
      currentPage: newCurrentPage,
      results: results.slice(sliceStart, sliceEnd),
    };
  }

  const limit = Breakpoints.DESKTOP.min <= window.innerWidth ? 16 : 8;
  const totalPages = Math.ceil(state.results.length / state.limit);
  const currentPage = 1;
  const hasMoreThanOnePage = totalPages > 1;
  const nextPage = hasMoreThanOnePage ? currentPage + 1 : undefined;

  return {
    ...state,
    limit,
    totalPages,
    currentPage,
    nextPage,
    results: state.results.slice(0, limit),
    prevPage: undefined,
  };
};
