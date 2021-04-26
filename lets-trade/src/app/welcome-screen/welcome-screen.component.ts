import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent implements OnInit {
  isLogin = true;
  isRegister = false;
  constructor(
    private login: LoginFormComponent,
    private register: RegisterFormComponent
  ) {}

  setToLogin() {
    this.isLogin = true;
    this.isRegister = false;
  }

  setToRegister() {
    this.isRegister = true;
    this.isLogin = false;
  }

  ngOnInit(): void {}
}
