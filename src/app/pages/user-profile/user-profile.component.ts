import { Component, OnInit } from '@angular/core';
import { UserDto } from '../../services/models';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/services';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  isCurrentUser = false;
  message = '';
  level = true;

  constructor(private router: Router, private activatedRout: ActivatedRoute, private userService: UserService) {}

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

}
