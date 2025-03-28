import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuComponent } from "./pages/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'travel-agency-ui';

  constructor(private translateService: TranslateService) {
    const userLang = localStorage.getItem("lang") || 'en';
    this.translateService.setDefaultLang(userLang);
    this.translateService.use(userLang);
  }
}
