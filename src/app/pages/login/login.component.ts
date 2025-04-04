import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../services/models';
import { AuthenticationService, UserService } from '../../services/services';
import { TokenService } from '../../services/token/token.service';
import { TranslateModule } from '@ngx-translate/core';

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
  errorMessage: string = '';
  successMessage: string = '';

  clickable: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  login() {
    this.clickable = false;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.login({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.access_token as string;
        this.router.navigate(['vouchers']);
      },
      error: (err) => {
        if (err.error.statusMessage) {
          this.errorMessage = err.error.statusMessage;
        }
      }
    }).add(() => {
      this.clickable = true;
    });
  }

  sendResetPasswordEmail() {
    this.clickable = false;
    this.errorMessage = '';

    this.userService.sendResetPasswordMail({
      'email': this.resetEmail
    }).subscribe({
      next: (res) => {
        if (res.statusMessage) {
          this.successMessage = res.statusMessage;
        }
      },
      error: (err) => {
        if (err.error.statusMessage) {
          this.errorMessage = err.error.statusMessage;
        }
      }
    }).add(() => {
      this.clickable = true;
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

}
