import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VoucherDto } from '../../services/models';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voucher-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './voucher-card.component.html',
  styleUrl: './voucher-card.component.scss'
})
export class VoucherCardComponent {

  private _manage:boolean = false;
  private _order:boolean = false;

  constructor(private router: Router) {}

  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  get voucher(): VoucherDto {
    return this._voucher;
  }

  @Input()
  set voucher(value: VoucherDto) {
    this._voucher = value;
  } 

  private _voucher: VoucherDto = {}

  get manage():boolean {
    return this._manage;
  }
  
  @Input()
  set manage(value: boolean) {
    this._manage = value;
  }

  get order():boolean {
    return this._order;
  }

  @Input()
  set order(value: boolean) {
    this._order = value;
  }

  @Output() private ordered: EventEmitter<VoucherDto> = new EventEmitter<VoucherDto>();
  @Output() private updated: EventEmitter<VoucherDto> = new EventEmitter<VoucherDto>();

  onUpdateVoucher() {
    this.updated.emit(this._voucher);
  }

  onOrderVoucher() {
    this.ordered.emit(this._voucher);
  }

  updateVoucher(voucher: VoucherDto) {
    this.router.navigate(['manage', voucher.id]);
  }

}
