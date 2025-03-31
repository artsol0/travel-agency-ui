import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../services/models';
import { AuthenticationService } from '../../services/services';
import { TokenService } from '../../services/token/token.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {username: '', password: ''};
  errorMessage: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService,
    private translateService: TranslateService
  ) {}

  login() {
    this.errorMessage = [];

    if (!this.authRequest.username || !this.authRequest.password) {
      this.translateService.get('validation.login').subscribe(translatedMessage => {
        this.errorMessage = [translatedMessage];
      });
      return;
    }

    this.authService.login({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.access_token as string;
        this.router.navigate(['vouchers']);
      },
      error: (err) => {
        if (err.error.statusMessage) {
          this.errorMessage.push(err.error.statusMessage);
        }
      }
    })
  }

  register() {
    this.router.navigate(['/register']);
  }

}
