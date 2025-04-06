import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DataResponsePageOrderDto, OrderDto } from '../../services/models';
import { OrderService } from '../../services/services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit {

  orderedVouchers: DataResponsePageOrderDto = {};
  page = 0;
  size = 10;
  message:string = '';
  level:boolean = true;
  isUser:boolean = false;

  constructor(private router: Router, private orderService: OrderService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.isUser = this.tokenService.getRole() === 'ROLE_USER';
    if (this.isUser) {
      this.findCurrentUserOrders();
    } else {
      this.findAllOrders();
    }
  }

  findCurrentUserOrders() {
    this.orderService.getCurrentUserOrders({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (res) => {
        this.orderedVouchers = res;
      }
    });
  }

  findAllOrders() {
    this.orderService.getAllOrders1({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (res) => {
        this.orderedVouchers = res;
      }
    });
  }

  goToVoucher(voucherId: string|undefined) {
    this.router.navigate(['voucher', voucherId]);
  }

  goToUser(username: string|undefined) {
    this.router.navigate(['profile', username])
  }

  goToNextPage() {
    this.page++;
    if (this.isUser) {
      this.findCurrentUserOrders();
    } else {
      this.findAllOrders();
    }
  }

  goToPage(arg0: number) {
    this.page = arg0;
    if (this.isUser) {
      this.findCurrentUserOrders();
    } else {
      this.findAllOrders();
    }
  }

  goToPreviousPage() {
    this.page--;
    if (this.isUser) {
      this.findCurrentUserOrders();
    } else {
      this.findAllOrders();
    }
  }

  get isLastPage(): boolean {
    return this.page == this.orderedVouchers.results?.totalPages as number - 1;
  }

  payForOrder(order: OrderDto) {
    this.orderService.payForOrder({
      'voucherId': order.voucherId as string,
      'userId': order.userId as string
    }).subscribe({
      next: (res) => {
        this.level = res.succeeded as boolean;
        this.message = res.statusMessage as string;
        if (this.orderedVouchers.results?.content) {
          const updatedOrder = this.orderedVouchers.results?.content.find(o => o.voucherId === order.voucherId);
          if (updatedOrder) {
            updatedOrder.status = res.results?.status;
          }
        }
      },
      error: (err) => {
        this.level = err.error.succeeded;
        this.message = err.error.statusMessage;
      }
    });
  }

  updateOrderStatus(order: OrderDto) {
    this.orderService.updateOrderStatus({
      'voucherId': order.voucherId as string,
      'userId': order.userId as string,
      'status': order.status as string
    }).subscribe({
      next: (res) => {
        this.level = res.succeeded as boolean;
        this.message = res.statusMessage as string;
        if (this.orderedVouchers.results?.content) {
          const updatedOrder = this.orderedVouchers.results?.content.find(o => o.voucherId === order.voucherId);
          if (updatedOrder) {
            updatedOrder.status = res.results?.status;
          }
        }
      },
      error: (err) => {
        this.level = err.error.succeeded;
        this.message = err.error.statusMessage;
      }
    })
  }

  deleteOrder(order: OrderDto) {
    this.orderService.deleteOrder({
      'voucherId': order.voucherId as string,
      'userId': order.userId as string
    }).subscribe({
      next: (res) => {
        this.level = res.succeeded as boolean;
        this.message = res.statusMessage as string;
        if (this.orderedVouchers.results?.content) {
          this.orderedVouchers.results.content = this.orderedVouchers.results.content.filter(o => !(o.voucherId === order.voucherId && o.userId === order.userId));
        }
      },
      error: (err) => {
        this.level = err.error.succeeded;
        this.message = err.error.statusMessage;
      }
    })
  }

}
