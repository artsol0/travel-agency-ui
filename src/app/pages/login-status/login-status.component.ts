import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login-status',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './login-status.component.html',
  styleUrl: './login-status.component.scss'
})
export class LoginStatusComponent implements OnInit {

  succeeded:boolean = false;
  token:string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.token = params.get('token') as string;
    });

    if (this.token) {
      this.succeeded = true;
      localStorage.setItem('token', this.token);
    } else {
      this.succeeded = false;
    }
  }

}
