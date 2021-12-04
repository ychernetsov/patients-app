import { Order } from 'app/shared/models/order.model';
import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';



/**
 * @title Table dynamically changing the columns displayed
 */
 @Component({
  selector: 'st-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersListComponent {
  @Input() orders: Order[];
  order_mapper = {
    'status': 'name',
    'creator': 'name',
    'patient': 'fullName',
    'samples': 'true',
    'facility': 'name',
    'orderNum': 'true',
    'requests': 'true',
    'insurance': 'true',
    'orderName': 'true',
    'physician': 'name',
    'creationDate': 'formattedDate'
  };
}
