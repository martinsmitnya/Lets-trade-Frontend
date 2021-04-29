import { Component, OnInit } from '@angular/core';
import { TradeApiService } from '../trade-api.service';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css'],
})
export class AccountBalanceComponent implements OnInit {
  balance: number = 0;
  stocksValue: number = 0;

  constructor(private tradeApi: TradeApiService) {}

  ngOnInit(): void {
    this.tradeApi.getStock().subscribe({
      next: (data) => {
        this.balance = data.balance;
        for (let i = 0; i < data.stockList.length; i++) {
          this.stocksValue +=
            data.stockList[i].amount * data.stockList[i].latestPrice;
        }
      },
    });
  }
}
