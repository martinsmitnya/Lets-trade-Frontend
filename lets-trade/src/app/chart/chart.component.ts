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

  getUserData() {}

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
    this.tradeApi.getStock().subscribe({
      next: (data) => {
        data.stockList.forEach((stock: any) => {
          let date = new Date(stock.timestamp);
          this.multi[4].series[date.getDay()].value += stock.buyPrice;
          this.multi.forEach((element: any) => {
            if (element.name === stock.symbol) {
              date = new Date(stock.timestamp);
              element.series[date.getDay()].value += stock.buyPrice;
            }
          });
        });
      },
      complete: () => {
        this.chartReady = true;
      },
    });
  }
}
