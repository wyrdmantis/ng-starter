import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {LoginComponent} from './containers/login.component';
import {LoginFormComponent} from './components/login-form.component';
import {AUTH_ROUTES} from './auth.routes';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    RouterModule.forChild(AUTH_ROUTES)
  ]
})
export class AuthModule {
}
