import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockApiService } from '../stock-api.service';

@Component({
  selector: 'app-current-stocks',
  templateUrl: './current-stocks.component.html',
  styleUrls: ['./current-stocks.component.css'],
})
export class CurrentStocksComponent implements OnInit {
  allStocks: any[] = [];

  constructor(private stockApiService: StockApiService) {}

  ngOnInit(): void {
    this.stockApiService.getAllStock().map((element: Observable<any>) => {
      element.subscribe({
        next: (data) => this.allStocks.push(data),
        error: (error) => console.error('Error: ' + error.error.message),
      });
    });
  }
}
