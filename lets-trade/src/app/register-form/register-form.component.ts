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
  constructor(
    private formBuilder: FormBuilder,
    private tradeApi: TradeApiService
  ) {}

  onSubmit() {
    this.tradeApi.register(
      this.sendForm.value.name,
      this.sendForm.value.password,
      this.sendForm.value.email
    );
  }

  ngOnInit(): void {}
}
