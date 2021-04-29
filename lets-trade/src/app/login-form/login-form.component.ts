import { Component, OnInit } from '@angular/core';
import { TradeApiService } from '../trade-api.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { isLoggedIn } from '../isLoggedIn';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  sendForm = this.formBuilder.group({ name: '', password: '', email: '' });
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private tradeApi: TradeApiService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.sendForm.value.name.trim() === '') {
      this.errorMessage = 'There is no username';
    } else if (this.sendForm.value.password.trim() === '') {
      this.errorMessage = 'There is no password';
    } else {
      this.tradeApi
        .login(
          this.sendForm.value.name.trim(),
          this.sendForm.value.password.trim(),
          this.sendForm.value.email.trim()
        )
        .subscribe({
          next: (data) => {
            localStorage.setItem('token', data.token), this.checkLoggedIn();
          },
          error: (error) => (this.errorMessage = error.error.message),
        });
    }
  }

  checkLoggedIn() {
    if (isLoggedIn()) {
      this.router.navigate(['/main']);
    }
  }

  ngOnInit(): void {
    this.checkLoggedIn();
  }
}
