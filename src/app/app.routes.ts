import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VoucherListComponent } from './pages/voucher-list/voucher-list.component';
import { ManageVoucherComponent } from './pages/manage-voucher/manage-voucher.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { authGuard } from './services/guard/auth.guard';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

export const routes: Routes = [
    { path: 'login', title: 'Trevel Agency - Login', component: LoginComponent },
    { path: 'register', title: 'Trevel Agency - Register', component: RegisterComponent },
    { path: 'vouchers', title: 'Travel Agency - Vouchers', component: VoucherListComponent },
    { path: 'manage', title: 'Travel Agency - Create Voucher', component: ManageVoucherComponent, canActivate: [authGuard] },
    { path: 'manage/:voucherId', title: 'Travel Agency - Update Voucher', component: ManageVoucherComponent, canActivate: [authGuard] },
    { path: 'orders', title: 'Travel Agency - Orders', component: OrderListComponent, canActivate: [authGuard] },
    { path: 'profile', title: 'Travel Agency - User Profile', component: UserProfileComponent, canActivate: [authGuard] },
    { path: 'profile/:username', title: 'Travel Agency - User Profile', component: UserProfileComponent, canActivate: [authGuard] }
];
