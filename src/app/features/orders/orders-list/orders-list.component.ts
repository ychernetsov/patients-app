import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Order } from 'app/shared/models/order.model';

@Component({
  selector: 'st-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersListComponent implements OnInit {
  @Input() orders: Order[];
  constructor() { }

  ngOnInit(): void {
  }

}
