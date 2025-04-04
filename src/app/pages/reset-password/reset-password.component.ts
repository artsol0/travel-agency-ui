import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '../../services/services';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordRequest } from '../../services/models';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {

  token: string = '';
  resetPasswordRequest: ResetPasswordRequest = {'password': ''};
  errorMessage: string = '';
  successMessage: string = '';

  resetPasswordForm = new FormGroup({
    password: new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$')]),
    confirmPassword: new FormControl("",Validators.required)
  })

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.token = params.get('token') as string;
    });
  }

  resetPassword() {
    this.errorMessage = '';
    this.successMessage = '';
    if (this.resetPasswordForm.valid && this.resetPasswordForm.dirty) {
      if (this.comparePasswords(this.resetPasswordForm.value.password as string, this.resetPasswordForm.value.confirmPassword as string)) {
        this.resetPasswordRequest.password = this.resetPasswordForm.value.password as string;

        this.userService.resetUserPassword({
          'body': this.resetPasswordRequest,
          'token': this.token
        }).subscribe({
          next: (res) => {
            this.successMessage = res.statusMessage as string;
            localStorage.setItem('token', this.token);
          },
          error: (err) => {
            if (err.error.statusMessage) {
              this.errorMessage = err.error.statusMessage;
            }
          }
        })
      } else {
        this.resetPasswordForm.controls.confirmPassword.reset();
        this.resetPasswordForm.controls.confirmPassword.markAsTouched();
      }
    }
  }

  private comparePasswords(password: string, confirmPassword: string):boolean {
    return password === confirmPassword;
  }

}
