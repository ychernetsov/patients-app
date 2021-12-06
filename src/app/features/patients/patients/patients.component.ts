import { Component, ChangeDetectionStrategy } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { selectIsLoading, selectPatients } from "app/core/patients/patients.selectors";
import { Patient } from "app/shared/models/patient.model";
import { Observable } from "rxjs";
import { AppState } from "app/core/core.state";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { fetchPatients, startFetchPatients } from "app/core/patients/patients.actions";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  patients$: Observable<Patient[]>;
  isLoading$: Observable<boolean>;

  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(private store: Store<AppState>) {
    this.patients$ = this.store.pipe(
      select(selectPatients)
    )
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  getPatients() {
    this.store.dispatch(startFetchPatients());
    this.store.dispatch(fetchPatients());
  }
}
