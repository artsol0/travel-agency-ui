import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthenticationRequest } from '../../services/models';
import { AuthenticationService } from '../../services/services';
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
  errorMessage: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {}

  login() {
    this.errorMessage = [];
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
