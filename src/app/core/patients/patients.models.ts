import { Patient } from "app/shared/models/patient.model";

export interface PatientsState {
    isLoading: boolean;
    patients: Patient[];
}

export interface PatientsResponse {
    count: string;
    patient: Patient[];
}