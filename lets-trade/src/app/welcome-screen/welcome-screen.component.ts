import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent implements OnInit {
  isLogin = true;
  isRegister = false;
  constructor() {}

  change() {
    this.isLogin = !this.isLogin;
    this.isRegister = !this.isRegister;
  }

  ngOnInit(): void {}
}
