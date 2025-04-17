import { Component } from '@angular/core';
import { Order } from '../../../models/petstore';
import { PetstoreService } from '../../../services/petstore.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  imports: [FormsModule, CommonModule],
})
export class OrderListComponent {
  orders: Order[] = [];
  orderId: number | undefined;

  constructor(private petstoreService: PetstoreService) {}

  searchOrder() {
    if (this.orderId) {
      this.petstoreService.getOrderById(this.orderId).subscribe((order: Order) => {
        this.orders = [order];
      });
    }
  }
}