import { Component, OnInit, EventEmitter } from '@angular/core';
import { TradeApiService } from '../trade-api.service';
import { FormBuilder } from '@angular/forms';

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
    private tradeApi: TradeApiService
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
          next: (data) => localStorage.setItem('token', data.token),
          error: (error) => (this.errorMessage = error.message),
        });
    }
  }

  ngOnInit(): void {}
}
