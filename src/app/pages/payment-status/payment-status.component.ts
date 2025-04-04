import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentService } from '../../services/services';

@Component({
  selector: 'app-payment-status',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './payment-status.component.html',
  styleUrl: './payment-status.component.scss'
})
export class PaymentStatusComponent implements OnInit {

  succeeded: boolean = false;
  sessionId: string = '';
  message: string = '';
  level: boolean = true;

  ngOnInit(): void {
    this.succeeded = this.router.url.includes('success');
    this.route.queryParamMap.subscribe(params => {
      this.sessionId = params.get('sessionId') as string;
    });
    if (this.succeeded) {
      this.paymentService.successPayment({
        'sessionId': this.sessionId
      }).subscribe({
        error: (err) => {
          this.level = err.error.succeeded;
          this.message = err.error.statusMessage;
          this.succeeded = false;
        }
      });
    } else {
      this.paymentService.cancelPayment({
        'sessionId': this.sessionId
      }).subscribe({
        error: (err) => {
          this.level = err.error.succeeded;
          this.message = err.error.statusMessage;
        }
      });
    }
  }

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

}
