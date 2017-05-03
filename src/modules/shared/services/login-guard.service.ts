import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {AuthService} from './auth.service';

export type CanActivateState = boolean | Observable<boolean> | Promise<boolean>;

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): CanActivateState {
    const isLoggedIn = this._authService.isLoggedIn();

    if (!isLoggedIn) {
      return this._router.navigate(['/auth/login']);
    }

    return isLoggedIn;
  }
}
