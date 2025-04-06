import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/services';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-account-activation',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './account-activation.component.html',
  styleUrl: './account-activation.component.scss'
})
export class AccountActivationComponent implements OnInit {

  succeeded:boolean = false;
  token:string = '';
  result:string = '';

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.token = params.get('token') as string;
    });

    if (this.token) {
      this.userService.activateUserAccount({
        'token': this.token
      }).subscribe({
        next: (res) => {
          this.succeeded = res.succeeded as boolean;
          this.result = res.statusMessage as string;
          localStorage.setItem('token', this.token);
        },
        error: (err) => {
          this.succeeded = err.succeeded as boolean;
          this.result = err.statusMessage as string;
        }
      });
    } else {
      this.succeeded = false;
    }

  }

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

}
