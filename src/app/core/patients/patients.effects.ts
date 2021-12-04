import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { Patient } from 'app/shared/models/patient.model';
import { map, mergeMap } from 'rxjs/operators';
import { FetchDataService } from '../fetch-data/fetch-data.service';

import { fetchPatients, fetchPatientsSuccess } from './patients.actions';


@Injectable()
export class PatientsEffects {
  fetchPatients = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fetchPatients),
        mergeMap(() =>
          this.fetchDataService.getPatients().pipe(
              map((patients: Patient[]) => fetchPatientsSuccess({ payload: patients }))
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
