import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  lang:string = '';

  constructor(
    private router: Router,
    private translateService:TranslateService
  ){
    this.lang = localStorage.getItem("lang") || 'en';
    this.translateService.setDefaultLang(this.lang);
    this.translateService.use(this.lang);
  }

  changeLang(lang:any){
    const selectedLanguage = lang.target.value;
    localStorage.setItem('lang',selectedLanguage);
    this.translateService.use(selectedLanguage);
  }

  register() {
    this.router.navigate(['register']);
  }

  login() {
    this.router.navigate(['login']);
  }

  vocuhers() {
    this.router.navigate(['vouchers']);
  }

  orders() {
    this.router.navigate(['orders']);
  }

  profile() {
    this.router.navigate(['profile']);
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  isLoggedIn():boolean {
    return localStorage.getItem('token') != null;
  }

}
