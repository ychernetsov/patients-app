import { createAction, props } from '@ngrx/store';
import { Order } from 'app/shared/models/order.model';

export const fetchOrders = createAction(
    '[Orders] Fetch Orders'
);
export const fetchOrdersSuccess = createAction(
    '[Orders] Fetch Orders Success',
    props<{ payload: Order[] }>()
);