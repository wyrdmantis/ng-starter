import {Component} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {LoginData} from '../../shared/models/login-data.model';

@Component({
  selector: 'ngs-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private _auth: AuthService) {
  }

  onLogin(payload: LoginData) {
    this._auth.login(payload);
  }
}
