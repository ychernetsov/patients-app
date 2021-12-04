import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { PatientsRoutingModule } from "./patients-routing.module";
import { PatientsComponent } from "./patients/patients.component";
import { PatientsListComponent } from './patients-list/patients-list.component';

@NgModule({
  declarations: [PatientsComponent, PatientsListComponent],
  imports: [CommonModule, SharedModule, PatientsRoutingModule],
  providers: []
})
export class PatientsModule {}
