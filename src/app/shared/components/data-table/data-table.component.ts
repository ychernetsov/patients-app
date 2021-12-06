import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, EventEmitter, Output, OnChanges } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface FilterParams {
  key: string;
  name: string;
  type: string;
};

@Component({
  selector: 'st-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent<T> implements OnInit, OnChanges {
  data: MatTableDataSource<T>;
  @Input() dataset: T;
  @Input() config: {[key:string]: string};
  @Input() filterParams: FilterParams;
  @Output() toggleFavoriteItem = new EventEmitter<{id: number, prop: string}>();
  displayedColumns: string[];
  columnsToDisplay: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    const normalizedData = this.transformTable(this.dataset);
    this.data = new MatTableDataSource(normalizedData);
    this.displayedColumns = this.getDisplayedColumns();
    this.columnsToDisplay = [...this.displayedColumns.slice()];
  }

  ngOnChanges(changes) {
    if(changes) {
      const normalizedData = this.transformTable(this.dataset);
      this.data = new MatTableDataSource(normalizedData);
      this.data.paginator = this.paginator;
    }

  }

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }

  private getDisplayedColumns() {
    return Object.keys(this.data.filteredData[0]).filter(key => this.config[key]);
  }

  transformTable(table: any) {
    if (!table) {
      return;
    }
    return table
      .map(column => this.processColumn(column));
  }

  // breaks SOLID open/close principle, should be refatctored
  private processColumn(c) {
    const init = {
      'Favs': ''
    };
    return Object.entries(c).reduce((acc:any, [key, value]: [string, any]) => {
      if (typeof value === 'object') {
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
            acc[key] = Object.entries(value).reduce((addressObj, [key, value]) => {
              if (!value) {
                return addressObj;
              }
              const address = typeof value === 'object' ? `${key}-${value['name']}\n` : `${key}-${value}\n`;
              if (address.length) {
                addressObj += address;
              }
              return addressObj;
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
            acc[key] = value[this.config[key]];
        }
      } else {
        acc[key] = value;
      }
      return acc;
    }, init)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  toggleFavorites(el: T) {
    const prop = this.filterParams.type === 'orders' ? 'orderNum' : 'code';
    const id = el[prop];
    this.toggleFavoriteItem.emit({id, prop});
  }

}
