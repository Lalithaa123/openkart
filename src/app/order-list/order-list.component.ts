import { Component } from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  orders: Order[] = [
    new Order('ORD123', 'Y 81'),
    new Order('ORD124', 'APPLE 14'),
    new Order('ORD125', 'Y 81'),
    new Order('ORD126', 'APPLE 14'),
    new Order('ORD127', 'Y 81'),
    new Order('ORD128', 'APPLE 14'),


  ]

}
