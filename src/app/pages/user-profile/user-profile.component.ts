import { Component, OnInit } from '@angular/core';
import { UserDto } from '../../services/models';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentService, UserService } from '../../services/services';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  isCurrentUser = false;
  message = '';
  level = true;
  amount = 0;
  isConfirmed = false;
  paymentUTL:string = '';

  constructor(
    private router: Router, 
    private activatedRout: ActivatedRoute, 
    private userService: UserService, 
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    const username = this.activatedRout.snapshot.params['username'];
    if (username) {
      this.userService.getUserByUsername({
        'username': username
      }).subscribe({
        next: (user) => {
          if (user.results) {
            this.userDto = user.results;
          }
        }
      });
    } else {
      this.isCurrentUser = true;
      this.userService.getCurrentUser().subscribe({
        next: (user) => {
          if (user.results) {
            this.userDto = user.results;
          }
        }
      });
    }
  }

  userDto: UserDto = { 
    id: '', 
    username: '', 
    email: '', 
    password: '', 
    role: '', 
    phoneNumber: '', 
    active: false, 
    balance: 0
  }

  changeUserStatus(userDto: UserDto) {
    this.userService.changeUserStatusByUsername({
      'userId': userDto.id as string
    }).subscribe({
      next: (res) => {
        this.userDto.active = res.results?.active;
      },
      error: (err) => {
        this.level = err.error.succeeded as boolean;
        this.message = err.error.statusMessage as string;
      }
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  increaseUserBalance() {
    this.paymentService.increaseUserBalance({
      'amount': this.amount
    }).subscribe({
      next: (res) => {
        if (res.results) {
          this.isConfirmed = res.succeeded as boolean;
          this.level = res.succeeded as boolean;
          this.message = res.statusMessage as string;
          this.paymentUTL = res.results.sessionURL as string;
        }
      },
      error: (err) => {
        this.isConfirmed = err.error.succeeded;
        this.level = err.error.succeeded;
        this.message = err.error.statusMessage as string;
        this.paymentUTL = '';
      }
    });
  }

}
