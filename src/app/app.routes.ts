import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VoucherComponent } from './pages/voucher/voucher.component';
import { VoucherListComponent } from './pages/voucher-list/voucher-list.component';
import { ManageVoucherComponent } from './pages/manage-voucher/manage-voucher.component';

export const routes: Routes = [
    { path: 'login', title: 'Trevel Agency - Login', component: LoginComponent },
    { path: 'register', title: 'Trevel Agency - Register', component: RegisterComponent },
    { path: 'vouchers', title: 'Travel Agency - Vouchers', component: VoucherListComponent },
    { path: 'manage', title: 'Travel Agency - Create Voucher', component: ManageVoucherComponent },
    { path: 'manage/:voucherId', title: 'Travel Agency - Update Voucher', component: ManageVoucherComponent }
];
