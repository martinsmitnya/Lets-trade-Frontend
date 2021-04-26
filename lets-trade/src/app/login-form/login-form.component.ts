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

  constructor(
    private formBuilder: FormBuilder,
    private tradeApi: TradeApiService
  ) {}

  onSubmit() {}

  ngOnInit(): void {}
}
