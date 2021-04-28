import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClient } from '@angular/common/http';
// import { tradeApi } from '../trade-api.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  url: string = 'http://localhost:8080';
  multi: any[] = [
    {
      "name": "GOOGL",
      "series": [
        {
          "name": "monday",
          "value": 88000000
        },
        {
          "name": "tuesday",
          "value": 50000020
        },
        {
          "name": "wednesday",
          "value": 68000000
        },
        {
          "name": "thursday",
          "value": 59000000
        },
        {
          "name": "friday",
          "value": 38000000
        }
      ]
    },
  
    {
      "name": "FB",
      "series": [
        {
          "name": "monday",
          "value": 34000000
        },
        {
          "name": "tuesday",
          "value": 50000020
        },
        {
          "name": "wednesday",
          "value": 58000000
        },
        {
          "name": "thursday",
          "value": 99000000
        },
        {
          "name": "friday",
          "value": 58000000
        }
      ]
    },
  
    {
      "name": "MSFT",
      "series": [
        {
          "name": "monday",
          "value": 58000000
        },
        {
          "name": "tuesday",
          "value": 50000020
        },
        {
          "name": "wednesday",
          "value": 58000000
        },
        {
          "name": "thursday",
          "value": 59000000
        },
        {
          "name": "friday",
          "value": 58000000
        }
      ]
    },
    {
      "name": "TSLA",
      "series": [
        {
          "name": "monday",
          "value": 48000000
        },
        {
          "name": "tuesday",
          "value": 60000020
        },
        {
          "name": "wednesday",
          "value": 58000000
        },
        {
          "name": "thursday",
          "value": 39000000
        },
        {
          "name": "friday",
          "value": 58000000
        }
      ]
    }
  ];
  view: [number, number]= [700, 300];

  // options
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
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private http: HttpClient) {  }

  getUserData() {
    const headers = { 'content-Type': 'application/json', 'token': 'asdasd' };
    return this.http.get<any>(`${this.url}/stock`, { headers })
    .subscribe({
      next: (data: any) => this.multi = [
        {
          "name": data.symbol,
          "series": [
            {
              "name": "monday",
              "value": 88000000
            },
            {
              "name": "tuesday",
              "value": 50000020
            },
            {
              "name": "wednesday",
              "value": 68000000
            },
            {
              "name": "thursday",
              "value": 59000000
            },
            {
              "name": "friday",
              "value": 38000000
            }
          ]
        },
      ],
      error: (error: any) => this.multi = [error.message],
    });
  }

  ngOnInit(): void {
    
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
