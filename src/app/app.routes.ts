import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VoucherListComponent } from './pages/voucher-list/voucher-list.component';
import { ManageVoucherComponent } from './pages/manage-voucher/manage-voucher.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { authGuard } from './services/guard/auth.guard';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PaymentStatusComponent } from './pages/payment-status/payment-status.component';
import { AccountActivationComponent } from './pages/account-activation/account-activation.component';
import { LoginStatusComponent } from './pages/login-status/login-status.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'vouchers', pathMatch: 'full' },
    { path: 'login', title: 'Trevel Agency - Login', component: LoginComponent },
    { path: 'register', title: 'Trevel Agency - Register', component: RegisterComponent },
    { path: 'vouchers', title: 'Travel Agency - Vouchers', component: VoucherListComponent },
    { path: 'account/activate', title: 'Travel Agency - Account Activation', component: AccountActivationComponent },
    { path: 'login/oauth2/status', title: 'Travel Agency - Login Status', component: LoginStatusComponent },
    { path: 'manage', title: 'Travel Agency - Create Voucher', component: ManageVoucherComponent, canActivate: [authGuard] },
    { path: 'manage/:voucherId', title: 'Travel Agency - Update Voucher', component: ManageVoucherComponent, canActivate: [authGuard] },
    { path: 'orders', title: 'Travel Agency - Orders', component: OrderListComponent, canActivate: [authGuard] },
    { path: 'profile', title: 'Travel Agency - User Profile', component: UserProfileComponent, canActivate: [authGuard] },
    { path: 'profile/:username', title: 'Travel Agency - User Profile', component: UserProfileComponent, canActivate: [authGuard] },
    { path: 'payment/success', title: 'Travel Agency - Payment Status', component: PaymentStatusComponent, canActivate: [authGuard] },
    { path: 'payment/cancel', title: 'Travel Agency - Payment Status', component: PaymentStatusComponent, canActivate: [authGuard] },
    { path: '**', title: "Travel Agency - Page Not Found", component: PageNotFoundComponent }
];
