import { PatientsState } from './patients.models'
import { fetchPatientsSuccess } from './patients.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: PatientsState = {
  isLoading: false,
  patients: []
};

const reducer = createReducer(
  initialState,
  on(fetchPatientsSuccess, (state, { payload }) => ({ ...state, isLoading: false, patients: payload }))
);

export function patientsReducer(
  state: PatientsState | undefined,
  action: Action
): PatientsState {
  return reducer(state, action);
}
