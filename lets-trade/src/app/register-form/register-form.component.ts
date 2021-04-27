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
      this.errorMessage = 'There is no username';
    } else if (this.sendForm.value.password.trim().length < 8) {
      this.errorMessage = 'The password must be at least 8 character';
    } else if (this.sendForm.value.email.trim() === '') {
      this.errorMessage = 'There is no email';
    } else {
      this.tradeApi.register(
        this.sendForm.value.name.trim(),
        this.sendForm.value.password.trim(),
        this.sendForm.value.email.trim()
      );
      this.errorMessage = '';
    }
  }

  ngOnInit(): void {}
}
