import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {AuthService} from './auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._authService.isLoggedIn()
      .do(isLoggedIn => isLoggedIn || this._router.navigate(['/auth/login']));
  }
}
