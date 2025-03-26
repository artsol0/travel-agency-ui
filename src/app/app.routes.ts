import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path: 'login', title: 'Trevel Agency - Login', component: LoginComponent },
    { path: 'register', title: 'Trevel Agency - Register', component: RegisterComponent },
];
