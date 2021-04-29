import { Component, OnInit } from '@angular/core';
import { TradeApiService } from '../trade-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  chartData: any[] = [];
  chartIsOk: boolean = false;
  constructor(private tradeApi: TradeApiService) {}
  ngOnInit() {
    this.chartData.push({
      name: 'TOTAL ASSETS',
      series: [
        {
          name: 'monday',
          value: 0,
        },
        {
          name: 'tuesday',
          value: 0,
        },
        {
          name: 'wednesday',
          value: 0,
        },
        {
          name: 'thursday',
          value: 0,
        },
        {
          name: 'friday',
          value: 0,
        },
      ],
    });
    this.tradeApi.getStock().subscribe({
      next: (data) => {
        data.stockList.forEach((stock: any) => {
          this.chartData[0].series[4].value += stock.buyPrice;
        });
      },
      complete: () => {
        this.chartIsOk = true;
      },
    });
    console.log(this.chartData);
  }
}
