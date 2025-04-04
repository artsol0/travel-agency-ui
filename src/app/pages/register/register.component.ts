import { Component } from '@angular/core';
import { UserDto } from '../../services/models';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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

  clickable: boolean = true;

  constructor (
    private router: Router,
    private userSerivce: UserService
  ) {}

  registerRequest: UserDto = { id: undefined, username: '', email: '', password: '', role: undefined, phoneNumber: undefined, active: undefined, balance: undefined}
  errorMessage: string = '';
  successMessage: string = '';

  registrationForm = new FormGroup({
    username: new FormControl("",[Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$')]),
    email: new FormControl("",[Validators.required, Validators.email]),
    phoneNumber: new FormControl("",Validators.pattern('^[0-9]+$')),
    password: new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$')]),
    confirmPassword: new FormControl("",Validators.required)
  })

  register() {
    this.errorMessage = '';
    this.successMessage = '';
    if (this.registrationForm.valid && this.registrationForm.dirty) {
      if (this.comparePasswords(this.registrationForm.value.password as string, this.registrationForm.value.confirmPassword as string)) {

        this.registerRequest = {
          username: this.registrationForm.value.username as string, 
          email: this.registrationForm.value.email as string, 
          password: this.registrationForm.value.password as string,
          phoneNumber: this.registrationForm.value.phoneNumber ? this.registrationForm.value.phoneNumber as string : undefined
        }

        this.clickable = false;
        this.userSerivce.registerUser({
          body: this.registerRequest
        }).subscribe({
          next: (res) => {
            this.successMessage = res.statusMessage as string;
          },
          error: (err) => {
            if (err.error.statusMessage) {
              this.errorMessage = err.error.statusMessage;
            }
          }
        }).add(() => {
          this.clickable = true;
        });
      } else {
        this.registrationForm.controls.confirmPassword.reset();
        this.registrationForm.controls.confirmPassword.markAsTouched();
      }
    }
  }

  private comparePasswords(password: string, confirmPassword: string):boolean {
    return password === confirmPassword;
  }

  login() {
    this.router.navigate(['/login']);
  }

}
