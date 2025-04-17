import { Component } from '@angular/core';
import { PetstoreService } from '../../services/petstore.service';
import { Order } from 'src/app/models/petstore';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent {
  orders: Order[] = [];
  orderId: number | undefined;

  constructor(private petstoreService: PetstoreService) {}

  searchOrder() {
    if (this.orderId) {
      this.petstoreService.getOrderById(this.orderId).subscribe((order) => {
        this.orders = [order];
      });
    }
  }
}