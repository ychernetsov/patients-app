import { Component, ChangeDetectionStrategy } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { selectPatients } from "app/core/patients/patients.selectors";
import { Patient } from "app/shared/models/patient.model";
import { Observable } from "rxjs";
import { AppState } from "app/core/core.state";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { fetchPatients } from "app/core/patients/patients.actions";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  patients$: Observable<Patient[]>;

  constructor(private store: Store<AppState>) {
    this.patients$ = this.store.pipe(
      select(selectPatients)
    )
  }

  getPatients() {
    this.store.dispatch(fetchPatients());
  }
}
