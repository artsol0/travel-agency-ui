import { Component, OnInit } from '@angular/core';
import { OrderService, VoucherService } from '../../services/services';
import { Router } from '@angular/router';
import { DataResponsePageVoucherDto, VoucherDto } from '../../services/models';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { VoucherCardComponent } from "../voucher-card/voucher-card.component";
import { TokenService } from '../../services/token/token.service';
import { GetAllSelectedVouchers$Params } from '../../services/fn/voucher/get-all-selected-vouchers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-voucher-list',
  standalone: true,
  imports: [CommonModule, TranslateModule, VoucherCardComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './voucher-list.component.html',
  styleUrl: './voucher-list.component.scss'
})
export class VoucherListComponent implements OnInit {

  voucherResponse: DataResponsePageVoucherDto = {};

  page = 0;
  size = 8;
  keyword = '';
  message = '';
  level = true;
  isAdmin = false;
  isFiltered = false;

  filterRequest: GetAllSelectedVouchers$Params = {
    'page': this.page,
    'size': this.size,
    'tourType': '',
    'transferType': '',
    'hotelType': '',
    'minPrice': undefined,
    'maxPrice': undefined
  }

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
    this.isFiltered = false;
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

  private findAllFilteredVouchers() {
    this.voucherService.getAllSelectedVouchers(this.filterRequest).subscribe({
      next: (vouchers) => {
        this.voucherResponse = vouchers;
      }
    })
  }

  searchbyFilter() {
    this.isFiltered = true;
    this.page = 0;
    this.findAllFilteredVouchers();
  }

  searchByKeyword(keyword: string) {
    this.page = 0;
    this.keyword = keyword;
    this.findAllVouchers();
  }

  goToNextPage() {
    this.page++;
    if (this.isFiltered) {
      this.findAllFilteredVouchers();
    } else {
      this.findAllVouchers();
    }
  }

  goToPage(arg0: number) {
    this.page = arg0;
    if (this.isFiltered) {
      this.findAllFilteredVouchers();
    } else {
      this.findAllVouchers();
    }
  }

  goToPreviousPage() {
    this.page--;
    if (this.isFiltered) {
      this.findAllFilteredVouchers();
    } else {
      this.findAllVouchers();
    }
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

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  clearFilter() {
    this.filterRequest = {
      'page': this.page,
      'size': this.size,
      'tourType': '',
      'transferType': '',
      'hotelType': '',
      'minPrice': undefined,
      'maxPrice': undefined
    }
    this.findAllVouchers();
  }

}

