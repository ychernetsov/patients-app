import { createAction, props } from '@ngrx/store';
import { Order } from 'app/shared/models/order.model';


export const startFetchOrders = createAction(
    '[Orders] Start Fetch Orders'
);

export const fetchOrders = createAction(
    '[Orders] Fetch Orders'
);
export const fetchOrdersSuccess = createAction(
    '[Orders] Fetch Orders Success',
    props<{ payload: Order[] }>()
);

export const toggleFavOrder = createAction(
    '[Orders] Set favorite order',
    props<{ payload: {id: number, prop: string} }>()
)