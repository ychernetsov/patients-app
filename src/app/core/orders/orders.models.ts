import { Order } from "app/shared/models/order.model";

export interface OrdersState {
    isLoading: boolean;
    orders: Order[];
}

export interface OrdersResponse {
    count: string;
    order: Order[];
}