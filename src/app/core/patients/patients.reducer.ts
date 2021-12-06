import { PatientsState } from './patients.models'
import { fetchPatientsSuccess, startFetchPatients, toggleFavPatient } from './patients.actions';
import { createReducer, on, Action } from '@ngrx/store';
import * as utils from '../utils/utils';

export const initialState: PatientsState = {
  isLoading: false,
  patients: []
};

const reducer = createReducer(
  initialState,
  on(startFetchPatients, (state) => ({ ...state, isLoading: true })),
  on(fetchPatientsSuccess, (state, { payload }) => ({ ...state, isLoading: false, patients: payload })),
  on(toggleFavPatient, (state, { payload }) => ({...state, patients: utils.updateItemInList(payload, state.patients) }))
);

export function patientsReducer(
  state: PatientsState | undefined,
  action: Action
): PatientsState {
  return reducer(state, action);
}
