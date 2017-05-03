import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginData} from '../../../shared/models/login-data.model';

const MIN_PASSWORD_LENGTH = 8;
const EMAIL_VALIDATOR = Validators.compose([Validators.required, Validators.email]);
const PASSWORD_VALIDATOR = Validators.compose([Validators.required, Validators.minLength(MIN_PASSWORD_LENGTH)]);

@Component({
  selector: 'ngs-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
  @Output() login = new EventEmitter<LoginData>();
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', EMAIL_VALIDATOR),
      password: new FormControl('', PASSWORD_VALIDATOR)
    });
  }

  onSubmit(): void {
    this.login.emit(this.loginForm.value);
  }
}
