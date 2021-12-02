import { OrdersState } from './orders.models'
import { fetchOrdersSuccess } from './orders.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: OrdersState = {
  isLoading: false,
  orders: []
};

const reducer = createReducer(
  initialState,
  on(fetchOrdersSuccess, (state, { payload }) => ({ ...state, isLoading: false, orders: payload }))
);

export function ordersReducer(
  state: OrdersState | undefined,
  action: Action
): OrdersState {
  return reducer(state, action);
}
