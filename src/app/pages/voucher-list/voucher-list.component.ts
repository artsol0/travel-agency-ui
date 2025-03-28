import { Component, OnInit } from '@angular/core';
import { OrderService, VoucherService } from '../../services/services';
import { Router } from '@angular/router';
import { DataResponsePageVoucherDto, VoucherDto } from '../../services/models';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { VoucherCardComponent } from "../voucher-card/voucher-card.component";

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
  private _manage:boolean = false;

  constructor(
    private voucherService: VoucherService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAllVouchers();
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

  get manage():boolean {
    return this._manage;
  }

  goToManage() {
    this.router.navigate(['/manage']);
  }

}

