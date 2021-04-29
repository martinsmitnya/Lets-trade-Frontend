import { Component, OnInit } from '@angular/core';
import { TradeApiService } from '../trade-api.service';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css'],
})
export class AccountBalanceComponent implements OnInit {
  balance: number = 0;

  constructor(private tradeApi: TradeApiService) {}

  ngOnInit(): void {
    this.tradeApi.getStock().subscribe({
      next: (data) => (this.balance = data.balance),
    });
  }
}
