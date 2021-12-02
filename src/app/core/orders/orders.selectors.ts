import { createSelector } from '@ngrx/store';

import { selectOrdersState } from '../core.state';
import { OrdersState } from './orders.models';

export const selectOrders = createSelector(
  selectOrdersState,
  (state: OrdersState) => state.orders
);

export const selectIsLoading = createSelector(
  selectOrdersState,
  (state: OrdersState) => state.isLoading
);
