import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AppLayoutComponent} from 'app/components/app-layout.component';
import {AppNavigationComponent} from './components/app-navigation.component';
import {APP_ROUTES} from './app.router';
import {AdjustContentHeightDirective} from './directives/adjust-content-height.directive';
import {AuthService} from '../shared/services/auth.service';
import {LoginGuard} from '../shared/services/login-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppNavigationComponent,
    AdjustContentHeightDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {useHash: true})
  ],
  providers: [
    AuthService,
    LoginGuard,
    {provide: Window, useValue: window}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
