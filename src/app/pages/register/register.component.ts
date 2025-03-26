import { Component } from '@angular/core';
import { UserDto } from '../../services/models';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/services';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor (
    private router: Router,
    private userSerivce: UserService
  ) {}

  registerRequest: UserDto = { id: undefined, username: '', email: '', password: '', role: undefined, phoneNumber: '', active: undefined, balance: undefined}
  errorMessage: Array<string> = [];

  register() {
    this.errorMessage = [];
    this.userSerivce.registerUser({
      body: this.registerRequest
    }).subscribe({
      next: (res) => {
        this.errorMessage.push(res.statusMessage as string);
      },
      error: (err) => {
        if (err.error.statusMessage) {
          this.errorMessage.push(err.error.statusMessage);
        }
      }
    })
  }

  login() {
    this.router.navigate(['/login']);
  }

}
