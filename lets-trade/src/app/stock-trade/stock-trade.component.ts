import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-trade',
  templateUrl: './stock-trade.component.html',
  styleUrls: ['./stock-trade.component.css'],
})
export class StockTradeComponent implements OnInit {
  symbol: string = '';

  constructor() {}

  ngOnInit() {}
}
