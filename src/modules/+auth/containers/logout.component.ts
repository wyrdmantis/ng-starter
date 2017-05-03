import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'ngs-logout',
  template: ''
})
export class LogoutComponent {
  constructor(_auth: AuthService, _router: Router) {
    _auth
      .logout()
      .subscribe(r => _router.navigateByUrl('/'))
      .unsubscribe();
  }
}
