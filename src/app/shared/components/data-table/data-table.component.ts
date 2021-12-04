import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'st-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent<T> implements OnInit {
  @Input() dataset: T;
  @Input() config: {[key:string]: string};
  array: any = [];
  displayedColumns: string[];
  columnsToDisplay: string[];
  data: T;
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  errorMessage = 'Something went wrong ...';
  // TABLE_COLUMNS = 8;

  constructor() { }

  ngOnInit() {
    this.displayedColumns = this.getDisplayedColumns();
    this.columnsToDisplay = this.displayedColumns.slice();
    this.data = this.transformTable(this.dataset);
  }

  private getDisplayedColumns() {
    return Object.keys(this.dataset[0]).filter(key => this.config[key]);
  }

  transformTable(table: any) {
    if (!table) {
      return;
    }
    return table
      .map(column => this.processColumn(column));
  }

  // breaks SOLID open/close principle, should be refatctord
  private processColumn(c) {
    return Object.entries(c).reduce((acc:any, [key, value]: [string, any]) => {
      switch (key) {
        case 'samples':
          acc[key] = value.map(sample => sample.identifier).join('\n');
          break;
        case 'requests':
          acc[key] = value.map(sample => sample.identifier).join('\n');
          break;
        case 'ids':
            acc[key] = value.map(id => id.name).join('\n');
            break;
        case 'address':
          acc[key] = Object.entries(value).reduce((addressObj: any, [key, value]: any) => {
            const address = value ? `${key}-${value}<br>` : '';
            if (address.length) {
              addressObj += address;
              return addressObj;
            }
          }, '');
          break;
        case 'insurance':
          try {
            acc[key] = value.paymentMethods.map(item => item.payer.name).join('\n');
          } catch {
            acc[key] = ''
          }
          break;
        default:
          acc[key] = typeof value === 'object' ? value[this.config[key]] : value;
      }
      return acc;
    }, {})
  }

}
