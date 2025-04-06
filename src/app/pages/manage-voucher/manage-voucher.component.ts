import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { VoucherDto } from '../../services/models';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VoucherService } from '../../services/services';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-manage-voucher',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './manage-voucher.component.html',
  styleUrl: './manage-voucher.component.scss'
})
export class ManageVoucherComponent implements OnInit {

  update:boolean = false;
  isAdmin: boolean = this.tokenSerivce.getRole() === 'ROLE_ADMIN';

  constructor(
    private voucherService: VoucherService,
    private router: Router,
    private activatedRout: ActivatedRoute,
    private tokenSerivce: TokenService
  ) {}

  addVoucherForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9 ]+$')]),
    description: new FormControl("", [Validators.required, Validators.maxLength(1000)]),
    price: new FormControl("", [Validators.required, Validators.min(0), Validators.pattern('^[0-9.]+$')]),
    tourType: new FormControl("", [Validators.required]),
    transferType: new FormControl("", [Validators.required]),
    hotelType: new FormControl("", [Validators.required]),
    arrivalDate: new FormControl("", [Validators.required]),
    evictionDate: new FormControl("", [Validators.required])
  });

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
    if (this.update) {
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
  }

  changeActiveStatus() {
    if (this.update) {
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
  
}
