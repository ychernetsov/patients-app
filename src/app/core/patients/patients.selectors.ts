import { createSelector } from '@ngrx/store';
import { Patient } from 'app/shared/models/patient.model';

import { selectPatientsState } from '../core.state';
import { PatientsState } from './patients.models';
import { patientsReducer } from './patients.reducer';

export const selectPatients = createSelector(
  selectPatientsState,
  (state: PatientsState) => state.patients
);

export const selectIsLoading = createSelector(
  selectPatientsState,
  (state: PatientsState) => state.isLoading
);

export const selectFavPateints = createSelector(
  selectPatientsState,
  (state: PatientsState) => state.patients.filter((patient: Patient) => patient.isFavorite)
)
