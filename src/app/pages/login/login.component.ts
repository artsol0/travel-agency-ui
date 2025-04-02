import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationRequest, ResetPasswordRequest } from '../../services/models';
import { AuthenticationService, UserService } from '../../services/services';
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
  resetEmail: string = '';
  errorMessage: Array<string> = [];
  successMessage: Array<string> = [];

  clickable: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService,
    private tokenService: TokenService,
    private translateService: TranslateService
  ) {}

  login() {
    this.clickable = false;
    this.errorMessage = [];
    this.successMessage = [];
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
        this.clickable = true;
      },
      error: (err) => {
        if (err.error.statusMessage) {
          this.errorMessage.push(err.error.statusMessage);
          this.clickable = true;
        }
      }
    })
  }

  sendResetPasswordEmail() {
    this.clickable = false;
    this.errorMessage = [];
    this.successMessage = [];
    if (!this.resetEmail) {
      this.translateService.get('validation.login').subscribe(translatedMessage => {
        this.errorMessage = [translatedMessage];
      });
      return;
    }

    this.userService.sendResetPasswordMail({
      'email': this.resetEmail
    }).subscribe({
      next: (res) => {
        if (res.statusMessage) {
          this.successMessage.push(res.statusMessage);
          this.clickable = true;
        }
      },
      error: (err) => {
        if (err.error.statusMessage) {
          this.errorMessage.push(err.error.statusMessage);
          this.clickable = true;
        }
      }
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

}
