import { Component, OnInit } from '@angular/core';
import { StockApiService } from '../stock-api.service';

@Component({
  selector: 'app-stock-prices',
  templateUrl: './stock-prices.component.html',
  styleUrls: ['./stock-prices.component.css'],
})
export class StockPricesComponent implements OnInit {
  prices: number[] = [];

  constructor(private stockApi: StockApiService) {}

  listPrices() {
    console.log(this.prices);
  }

  getPrice() {
    this.stockApi.getStock('goog').then((stock) => {
      console.log(stock);
    });
  }

  ngOnInit(): void {
    this.stockApi.getAllStock().forEach((element: any) => {
      element.subscribe({
        next: (data: number) => this.prices.push(data),
      });
    });
  }
}
