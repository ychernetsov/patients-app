import { Component, ChangeDetectionStrategy } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { fetchOrders, startFetchOrders } from "app/core/orders/orders.actions";
import { selectIsLoading, selectOrders } from "app/core/orders/orders.selectors";
import { Order } from "app/shared/models/order.model";
import { Observable } from "rxjs";
import { AppState } from '../../../core/core.state';

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  orders$: Observable<Order[]>;
  isLoading$: Observable<boolean>;

  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(private store: Store<AppState>) {
    this.orders$ = this.store.pipe(
      select(selectOrders)
    );
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  getOrders() {
    this.store.dispatch(startFetchOrders());
    this.store.dispatch(fetchOrders());
  }
}
