import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { VoucherService } from '../../services/services';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voucher-check',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './voucher-check.component.html',
  styleUrl: './voucher-check.component.scss'
})
export class VoucherCheckComponent implements OnInit {

  succeeded:boolean = false;
  token:string = '';
  message:string = '';
  level:boolean = true;

    constructor(
      private voucherService: VoucherService,
      private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.token = params.get('token') as string;
    });
    this.voucherService.checkVoucherExpire({
      'token': this.token
    }).subscribe({
      next: (res) => {
        this.level = res.succeeded as boolean;
        this.message = res.statusMessage as string;
      },
      error: (err) => {
        if (err.error) {
          this.level = err.error.succeeded as boolean;
          this.message = err.error.statusMessage as string;
        }
      }
    });
  }


}
