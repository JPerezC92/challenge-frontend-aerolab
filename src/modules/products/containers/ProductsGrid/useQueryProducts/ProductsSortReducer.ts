import { Product } from 'src/modules/products/models/Product';

export const enum SortBy {
  MOST_RECENT = 'MOST_RECENT',
  LOW_PRICE = 'LOW_PRICE',
  HIGH_PRICE = 'HIGH_PRICE',
}

export const SortActionType = 'SORT';

export interface SortState {
  value: Product[];
  results: Product[];
  sortFieldValue: `${SortBy}`;
}

export type SortAction = {
  type: typeof SortActionType;
  payload: { by: `${SortBy}` };
};

export const initialSortState: SortState = {
  value: [],
  results: [],
  sortFieldValue: SortBy.MOST_RECENT,
};

export const productsSortReducer = (
  state: SortState,
  action: SortAction
): SortState => {
  if (
    (action.type === SortActionType &&
      action.payload.by === SortBy.MOST_RECENT) ||
    (action.type !== SortActionType &&
      state.sortFieldValue === SortBy.MOST_RECENT)
  ) {
    return {
      ...state,
      sortFieldValue: SortBy.MOST_RECENT,
      results: state.results.filter((p1) =>
        state.results.find((p2) => p2.id === p1.id)
      ),
    };
  }

  if (
    (action.type === SortActionType &&
      action.payload.by === SortBy.LOW_PRICE) ||
    (action.type !== SortActionType &&
      state.sortFieldValue === SortBy.LOW_PRICE)
  )
    return {
      ...state,
      sortFieldValue: SortBy.LOW_PRICE,
      results: [...state.results].sort((p1, p2) => p1.cost - p2.cost),
    };

  if (
    (action.type === SortActionType &&
      action.payload.by === SortBy.HIGH_PRICE) ||
    (action.type !== SortActionType &&
      state.sortFieldValue === SortBy.HIGH_PRICE)
  )
    return {
      ...state,
      sortFieldValue: SortBy.HIGH_PRICE,
      results: [...state.results].sort((p1, p2) => p2.cost - p1.cost),
    };

  return { ...state };
};
