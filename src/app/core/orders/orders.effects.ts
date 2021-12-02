import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { Order } from 'app/shared/models/order.model';
import { map, mergeMap } from 'rxjs/operators';
import { FetchDataService } from '../fetch-data/fetch-data.service';

import { fetchOrders, fetchOrdersSuccess } from './orders.actions';


@Injectable()
export class OrdersEffects {
  fetchOrders = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fetchOrders),
        mergeMap(() =>
          this.fetchDataService.fetchOrders().pipe(
              map((orders: Order[]) => fetchOrdersSuccess({ payload: orders }))
          )
        )
      ),
    { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private fetchDataService: FetchDataService
  ) {}
}
