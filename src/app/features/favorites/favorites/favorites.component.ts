import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'app/core/core.state';
import { toggleFavOrder } from 'app/core/orders/orders.actions';
import { selectFavOrders } from 'app/core/orders/orders.selectors';
import { toggleFavPatient } from 'app/core/patients/patients.actions';
import { selectFavPateints } from 'app/core/patients/patients.selectors';
import { FilterParams } from 'app/shared/components/data-table/data-table.component';
import { Order } from 'app/shared/models/order.model';
import { Patient } from 'app/shared/models/patient.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'st-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {
  favOrders$: Observable<Order[]>;
  favPatients$: Observable<Patient[]>;
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

  patient_mapper = {
    'ids': 'true',
    'sex': 'name',
    'code': 'true',
    'address': 'name',
    'fullName': 'true',
    'birthDate': 'formattedDate',
    'Favs': 'true'
  };

  filterPatient: FilterParams = {
    key: null,
    name: null,
    type: 'patients'
  };

  filterOrder: FilterParams = {
    key: null,
    name: null,
    type: 'orders'
  };

  constructor(private store: Store<AppState>) { 
    this.favOrders$ = this.store.pipe(
      select(selectFavOrders)
    );

    this.favPatients$ = this.store.pipe(
      select(selectFavPateints)
    );
  }

  toggleFavorite(obj: {id: number, prop: string}, type: string) {
    type === 'order' ?
      this.store.dispatch(toggleFavOrder({ payload: obj })) :
      this.store.dispatch(toggleFavPatient({ payload: obj }))
  }
}
