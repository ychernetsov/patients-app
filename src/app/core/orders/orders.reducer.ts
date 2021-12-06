import { OrdersState } from './orders.models'
import { fetchOrdersSuccess, startFetchOrders, toggleFavOrder } from './orders.actions';
import { createReducer, on, Action } from '@ngrx/store';
import * as utils from '../utils/utils';
import { Order } from 'app/shared/models/order.model';

export const initialState: OrdersState = {
  isLoading: false,
  orders: []
};

const reducer = createReducer(
  initialState,
  on(startFetchOrders, (state) => ({ ...state, isLoading: true })),
  on(fetchOrdersSuccess, (state, { payload }) => ({ ...state, isLoading: false, orders: payload })),
  on(toggleFavOrder, (state, { payload }) => ({...state, orders: utils.updateItemInList(payload, state.orders) }))
);

export function ordersReducer(
  state: OrdersState | undefined,
  action: Action
): OrdersState {
  return reducer(state, action);
}