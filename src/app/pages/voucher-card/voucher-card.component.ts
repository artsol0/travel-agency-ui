import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VoucherDto } from '../../services/models';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-voucher-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './voucher-card.component.html',
  styleUrl: './voucher-card.component.scss'
})
export class VoucherCardComponent {

  role: string = this.tokenService.getRole();

  constructor(private router: Router, private tokenService: TokenService) {}

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

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  getHotelStars(hotelType?: string): number[] {
    const starsMap: Record<string, number> = {
      ONE_STAR: 1,
      TWO_STARS: 2,
      THREE_STARS: 3,
      FOUR_STARS: 4,
      FIVE_STARS: 5,
    };
  
    const stars = starsMap[hotelType ?? ''] || 0;
    return Array(stars).fill(0);
  }

}
