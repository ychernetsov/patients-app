import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/core.state';
import { toggleFavPatient } from 'app/core/patients/patients.actions';
import { FilterParams } from 'app/shared/components/data-table/data-table.component';
import { Patient } from 'app/shared/models/patient.model';

@Component({
  selector: 'st-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsListComponent {

  @Input() patients: Patient[];
  patient_mapper = {
    'ids': 'true',
    'sex': 'name',
    'code': 'true',
    'address': 'name',
    'fullName': 'true',
    'birthDate': 'formattedDate',
    'Favs': 'true'
  };
  filter: FilterParams = {
    key: 'fullName',
    name: 'Full Name',
    type: 'patients'
  };

  constructor(private store: Store<AppState>) {
  }

  toggleFavorite(obj: {id: number, prop: string}) {
    this.store.dispatch(toggleFavPatient({ payload: obj }))
  }

}
