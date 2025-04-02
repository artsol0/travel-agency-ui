import { Component } from '@angular/core';
import { UserDto } from '../../services/models';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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
    private userSerivce: UserService,
    private translateService: TranslateService
  ) {}

  registerRequest: UserDto = { id: undefined, username: '', email: '', password: '', role: undefined, phoneNumber: undefined, active: undefined, balance: undefined}
  errorMessage: Array<string> = [];
  successMessage: Array<string> = [];

  registrationForm = new FormGroup({
    username: new FormControl("",[Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$')]),
    email: new FormControl("",[Validators.required, Validators.email]),
    phoneNumber: new FormControl("",Validators.pattern('^[0-9]+$')),
    password: new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$')]),
    confirmPassword: new FormControl("",Validators.required)
  })

  register() {
    this.errorMessage = [];
    if (this.registrationForm.valid && this.registrationForm.dirty) {
      if (this.comparePasswords(this.registrationForm.value.password as string, this.registrationForm.value.confirmPassword as string)) {
        this.registerRequest = { 
          id: undefined, 
          username: this.registrationForm.value.username as string, 
          email: this.registrationForm.value.email as string, 
          password: this.registrationForm.value.password as string, 
          role: undefined, 
          phoneNumber: this.registrationForm.value.phoneNumber ? this.registrationForm.value.phoneNumber as string : undefined, 
          active: undefined, 
          balance: undefined
        }

        this.userSerivce.registerUser({
          body: this.registerRequest
        }).subscribe({
          next: (res) => {
            this.successMessage.push(res.statusMessage as string);
          },
          error: (err) => {
            if (err.error.statusMessage) {
              this.errorMessage.push(err.error.statusMessage);
            }
          }
        })
      } else {
        this.translateService.get('validation.confirmPassword').subscribe(translatedMessage => {
          this.errorMessage = [translatedMessage];
        });
        return;
      }
    } else {
      if (this.registrationForm.controls.username.invalid) {
        this.translateService.get('validation.username').subscribe(translatedMessage => {
          this.errorMessage = [translatedMessage];
        });
        return;
      }
      if (this.registrationForm.controls.email.invalid) {
        this.translateService.get('validation.email').subscribe(translatedMessage => {
          this.errorMessage = [translatedMessage];
        });
        return;
      }
      if (this.registrationForm.controls.password.invalid) {
        this.translateService.get('validation.password').subscribe(translatedMessage => {
          this.errorMessage = [translatedMessage];
        });
        return;
      }
      if (this.registrationForm.controls.phoneNumber.invalid) {
        this.translateService.get('validation.phoneNumber').subscribe(translatedMessage => {
          this.errorMessage = [translatedMessage];
        });
        return;
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
