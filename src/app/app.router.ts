import {Routes} from '@angular/router';

import {AppLayoutComponent} from './components/app-layout.component';
import {LoginGuard} from '../shared/services/login-guard.service';

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'auth', loadChildren: '../modules/+auth/auth.module#AuthModule'},
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      {path: 'dashboard', loadChildren: '../modules/+dashboard/dashboard.module#DashboardModule'},
      {path: 'profile', loadChildren: '../modules/+profile/profile.module#ProfileModule'}
    ]
  }
];
