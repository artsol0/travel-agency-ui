import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VoucherService } from '../../services/services';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { VoucherDto } from '../../services/models';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.scss'
})
export class VoucherComponent implements OnInit {

  constructor(
    private voucherService: VoucherService,
    private router: Router,
    private activatedRout: ActivatedRoute
  ) {}

  voucher: VoucherDto = {};

  ngOnInit(): void {
    const snapshotId = this.activatedRout.snapshot.params['voucherId'];
    if (snapshotId) {
      this.voucherService.getVoucherSnapshotById({
        'snapshotId': snapshotId
      }).subscribe({
        next: (res) => {
          this.voucher = res.results as VoucherDto;
        }
      })
    }
  }

  orders() {
    this.router.navigate(['orders']);
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
