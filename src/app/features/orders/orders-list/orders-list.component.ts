import { Order } from 'app/shared/models/order.model';
import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FilterParams } from 'app/shared/components/data-table/data-table.component';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/core.state';
import { toggleFavOrder } from 'app/core/orders/orders.actions';



/**
 * @title Table dynamically changing the columns displayed
 */
 @Component({
  selector: 'st-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersListComponent {
  @Input() orders: Order[];
  order_mapper = {
    'status': 'name',
    'creator': 'name',
    'patient': 'fullName',
    'samples': 'true',
    'facility': 'name',
    'orderNum': 'true',
    'requests': 'true',
    'insurance': 'true',
    'orderName': 'true',
    'physician': 'name',
    'creationDate': 'formattedDate',
    'Favs': 'true'
  };

  filter: FilterParams = {
    key: 'orderName',
    name: 'Order Name',
    type: 'orders'
  };

  constructor(private store: Store<AppState>) {
  }

  toggleFavorite(obj: {id: number, prop: string}) {
    this.store.dispatch(toggleFavOrder({ payload: obj }))
  }
}
