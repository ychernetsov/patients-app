import { createSelector } from '@ngrx/store';

import { selectPatientsState } from '../core.state';
import { PatientsState } from './patients.models';

export const selectPatients = createSelector(
  selectPatientsState,
  (state: PatientsState) => state.patients
);

export const selectIsLoading = createSelector(
  selectPatientsState,
  (state: PatientsState) => state.isLoading
);
