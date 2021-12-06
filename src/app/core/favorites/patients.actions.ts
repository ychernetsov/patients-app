import { createAction, props } from '@ngrx/store';
import { Patient } from 'app/shared/models/patient.model';

export const fetchPatients = createAction(
    '[Patients] Fetch Patients'
);
export const fetchPatientsSuccess = createAction(
    '[Patients] Fetch Patients Success',
    props<{ payload: Patient[] }>()
);