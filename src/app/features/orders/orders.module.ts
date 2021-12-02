import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { OrdersComponent } from "./orders/orders.component";
import { OrdersRoutingModule } from "./orders-routing.module";
import { OrdersListComponent } from './orders-list/orders-list.component';

@NgModule({
  declarations: [OrdersComponent, OrdersListComponent],
  imports: [CommonModule, SharedModule, OrdersRoutingModule]
})
export class OrdersModule {}
