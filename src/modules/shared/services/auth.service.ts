import {Injectable} from '@angular/core';
import {LoginData} from '../models/login-data.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  isLoggedIn(): boolean | Observable<boolean> {
    return true;
  }

  login(payload: LoginData) {
  }

  logout() {
  }
}
