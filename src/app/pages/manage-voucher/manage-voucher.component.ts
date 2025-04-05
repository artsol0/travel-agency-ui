import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { VoucherDto } from '../../services/models';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VoucherService } from '../../services/services';

@Component({
  selector: 'app-manage-voucher',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './manage-voucher.component.html',
  styleUrl: './manage-voucher.component.scss'
})
export class ManageVoucherComponent implements OnInit {

  update:boolean = false;

  constructor(
    private voucherService: VoucherService,
    private router: Router,
    private activatedRout: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const voucherId = this.activatedRout.snapshot.params['voucherId'];
    if (voucherId) {
      this.update = true;
      this.voucherService.getVoucherById({
        'voucherId': voucherId
      }).subscribe({
        next: (voucher) => {
          this.voucherRequest = {
            id: voucher.results?.id as string,
            title: voucher.results?.title as string,
            description: voucher.results?.description as string,
            price: voucher.results?.price as number,
            tourType: voucher.results?.tourType as string,
            transferType: voucher.results?.transferType as string,
            hotelType: voucher.results?.hotelType as string,
            arrivalDate: this.formatToHtmlDate(voucher.results?.arrivalDate) as string,
            evictionDate: this.formatToHtmlDate(voucher.results?.evictionDate) as string,
            hot: voucher.results?.hot as boolean,
            active: voucher.results?.active as boolean
          }
        }
      });
    }
  }

  voucherRequest: VoucherDto = {
    title: '',
    description: '',
    price: 0,
    tourType: '',
    transferType: '',
    hotelType: '',
    arrivalDate: '',
    evictionDate: '',
    hot: false,
    active: false
  }

  message = '';
  level = true;

  vouchers() {
    this.router.navigate(['/vouchers']);
  }

  createVoucher() {

    this.voucherRequest.arrivalDate = this.formatDate(this.voucherRequest.arrivalDate);
    this.voucherRequest.evictionDate = this.formatDate(this.voucherRequest.evictionDate);

    this.voucherService.createNewVoucher({
      body: this.voucherRequest
    }).subscribe({
      next: () => {
        this.vouchers();
      },
      error: (err) => {
        if (err.error.statusMessage) {
          this.level = false;
          this.message = err.error.statusMessage;
        }
      }
    });
  }

  updateVoucher() {

    this.voucherRequest.arrivalDate = this.formatDate(this.voucherRequest.arrivalDate);
    this.voucherRequest.evictionDate = this.formatDate(this.voucherRequest.evictionDate);

    this.voucherService.updateVoucherByVoucherId({
      'voucherId': this.voucherRequest.id as string,
      body: this.voucherRequest
    }).subscribe({
      next: () => {
        this.vouchers();
      },
      error: (err) => {
        if (err.error.statusMessage) {
          this.level = false;
          this.message = err.error.statusMessage;
        }
      }
    });
  }

  formatDate(date?: string): string {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  }

  formatToHtmlDate(date?: string): string {
    if (!date) return '';
    const [day, month, year] = date.split('-');
    return `${year}-${month}-${day}`;
  }

  changeHotStatus() {
    this.voucherService.changeVoucherHotStatusByVoucherId({
      'voucherId': this.voucherRequest.id as string
    }).subscribe({
      next: (res) => {
        this.level = true;
        this.message = res.statusMessage as string;
      },
      error: (err) => {
        if (err.error.statusMessage) {
          this.level = false;
          this.message = err.error.statusMessage;
        }
      }
    })
  }

  changeActiveStatus() {
    this.voucherService.changeVoucherActiveStatusByVoucherId({
      'voucherId': this.voucherRequest.id as string
    }).subscribe({
      next: (res) => {
        this.level = true;
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
  
}
