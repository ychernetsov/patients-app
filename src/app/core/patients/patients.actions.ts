import { createAction, props } from '@ngrx/store';
import { Patient } from 'app/shared/models/patient.model';

export const startFetchPatients = createAction(
    '[Patients] Start Fetch Patients'
);

export const fetchPatients = createAction(
    '[Patients] Fetch Patients'
);
export const fetchPatientsSuccess = createAction(
    '[Patients] Fetch Patients Success',
    props<{ payload: Patient[] }>()
);

export const toggleFavPatient = createAction(
    '[Patients] Toggle favorite patient',
    props<{ payload: {id: number, prop: string} }>()
)