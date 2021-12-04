import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Patient } from 'app/shared/models/patient.model';

@Component({
  selector: 'st-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsListComponent {

  @Input() patients: Patient[];
  patient_mapper = {
    'ids': 'true',
    'sex': 'name',
    'code': 'true',
    'address': 'name',
    'fullName': 'true',
    'birthDate': 'formattedDate'
  };

}
