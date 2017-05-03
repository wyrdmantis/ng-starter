import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppLayoutComponent} from 'app/components/app-layout.component';
import {AppNavigationComponent} from './components/app-navigation.component';
import {AuthService} from '../modules/shared/services/auth.service';
import {LoginGuard} from '../modules/shared/services/login-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppNavigationComponent
  ],
  imports: [BrowserModule],
  providers: [
    AuthService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
