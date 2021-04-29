import { Component, OnInit, NgModule } from '@angular/core';
import { TradeApiService } from '../trade-api.service';
import { Router } from '@angular/router';
// import { tradeApi } from '../trade-api.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  chartReady: boolean = false;
  multi: any[] = [
    {
      name: 'GOOG',
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
    },

    {
      name: 'FB',
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
    },

    {
      name: 'MSFT',
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
    },
    {
      name: 'TWTR',
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
    },

    {
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
    },
  ];
  view: [number, number] = [700, 300];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = false;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Day';
  yAxisLabel: string = 'Portfolio Value';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor(private tradeApi: TradeApiService, private router: Router) {}

  ngOnInit(): void {
    this.tradeApi.getStock().subscribe({
      next: (data) => {
        let total = 0;
        data.stockList.forEach((stock: any) => {
          let date = new Date(stock.timestamp);
          total += stock.buyPrice;
          this.multi[4].series[date.getDay() - 1].value = total;
          this.multi.forEach((element: any) => {
            if (element.name === stock.symbol) {
              element.series[date.getDay() - 1].value += stock.buyPrice;
            }
            if (date.getDay() - 2 >= 0)
              element.series[date.getDay() - 1].value +=
                element.series[date.getDay() - 2].value;
          });
        });
      },
      complete: () => {
        this.chartReady = true;
      },
    });
  }
}
