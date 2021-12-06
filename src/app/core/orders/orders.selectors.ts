import { createSelector } from '@ngrx/store';
import { Order } from 'app/shared/models/order.model';

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

export const selectFavOrders = createSelector(
    selectOrdersState,
    (state: OrdersState) => state.orders.filter((order: Order) => order.isFavorite)
)
