import { Component, OnInit, EventEmitter } from '@angular/core';
import { TradeApiService } from '../trade-api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  sendForm = this.formBuilder.group({ name: '', password: '' });
  callComponent: EventEmitter<any> = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private tradeApi: TradeApiService
  ) {}

  onSubmit() {}

  ngOnInit(): void {}
}
