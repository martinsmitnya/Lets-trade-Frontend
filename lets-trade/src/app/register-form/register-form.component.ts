import { Component, OnInit, EventEmitter } from '@angular/core';
import { TradeApiService } from '../trade-api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  sendForm = this.formBuilder.group({ name: '', password: '', email: '' });
  errorMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private tradeApi: TradeApiService
  ) {}

  onSubmit() {
    if (this.sendForm.value.name.trim() === '') {
      this.errorMessage = 'Username is required';
    } else if (this.sendForm.value.email.trim() === '') {
      this.errorMessage = 'Email address is required';
    } else if (this.sendForm.value.password.trim().length < 8) {
      this.errorMessage = 'The password must be at least 8 characters long';
    } else {
      this.tradeApi.register(
        this.sendForm.value.name.trim(),
        this.sendForm.value.password.trim(),
        this.sendForm.value.email.trim()
      )
      .subscribe({
        next: (data) => this.errorMessage = 'Loading...',
        error: (error) => this.errorMessage = error.message,
      });
    }
  }

  ngOnInit(): void {}
}
