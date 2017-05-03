import {Injectable} from '@angular/core';
import {LoginData} from '../models/login-data.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/**
 * Dummy authentication service
 */
@Injectable()
export class AuthService {
  private _loggedIn = false;

  isLoggedIn(): Observable<boolean> {
    return Observable.of(this._loggedIn);
  }

  login(payload: LoginData): Observable<boolean> {
    this._loggedIn = true;
    return this.isLoggedIn();
  }

  logout(): Observable<boolean> {
    this._loggedIn = false;
    return this.isLoggedIn();
  }
}
