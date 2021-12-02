import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { fetchOrders } from "app/core/orders/orders.actions";
import { OrdersState } from "app/core/orders/orders.models";
import { selectOrders } from "app/core/orders/orders.selectors";
import { Order } from "app/shared/models/order.model";
import { Observable } from "rxjs";
import { AppState } from '../../../core/core.state';

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  orders$: Observable<Order[]>;

  constructor(private store: Store<AppState>) {
    this.orders$ = this.store.pipe(
      select(selectOrders)
    )
  }

  ngOnInit() {
    
  }

  getOrders() {
    this.store.dispatch(fetchOrders());
  }
}
