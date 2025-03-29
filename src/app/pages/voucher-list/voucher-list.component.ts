import { Component, OnInit } from '@angular/core';
import { OrderService, UserService, VoucherService } from '../../services/services';
import { Router } from '@angular/router';
import { DataResponsePageVoucherDto, VoucherDto } from '../../services/models';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { VoucherCardComponent } from "../voucher-card/voucher-card.component";
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-voucher-list',
  standalone: true,
  imports: [CommonModule, TranslateModule, VoucherCardComponent],
  templateUrl: './voucher-list.component.html',
  styleUrl: './voucher-list.component.scss'
})
export class VoucherListComponent implements OnInit {

  voucherResponse: DataResponsePageVoucherDto = {};

  page = 0;
  size = 8;
  keyword = undefined;
  message = '';
  level = true;
  isAdmin = false;

  constructor(
    private voucherService: VoucherService,
    private orderService: OrderService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.findAllVouchers();
    this.isAdmin = this.tokenService.getRole() === 'ROLE_ADMIN';
  }

  private findAllVouchers() {
    this.voucherService.getAllVouchersPaged({
      page: this.page,
      size: this.size,
      keyword: this.keyword
    }).subscribe({
      next: (vocuhers) => {
        this.voucherResponse = vocuhers;
      }
    })
  }

  goToNextPage() {
    this.page++;
    this.findAllVouchers();
  }

  goToPage(arg0: number) {
    this.page = arg0;
    this.findAllVouchers();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllVouchers();
  }

  get isLastPage(): boolean {
    return this.page == this.voucherResponse.results?.totalPages as number - 1;
  }

  orderVoucher(voucher: VoucherDto) {
    this.orderService.createNewOrder({
      "voucherId": voucher.id as string
    }).subscribe({
      next: (res) => {
        this.level = res.succeeded as boolean;
        this.message = res.statusMessage as string;
      },
      error: (err) => {
        if (err.error.statusMessage) {
          this.level = false;
          this.message = err.error.statusMessage;
        }
      }
    });
  }

  goToManage() {
    this.router.navigate(['/manage']);
  }

}

