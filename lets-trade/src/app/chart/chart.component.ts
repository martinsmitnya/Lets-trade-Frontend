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
          "value": 295
        },
        {
          "name": "tuesday",
          "value": 285
        },
        {
          "name": "wednesday",
          "value": 321
        },
        {
          "name": "thursday",
          "value": 311
        },
        {
          "name": "friday",
          "value": 403
        }
      ]
    },
  
    {
      "name": "FB",
      "series": [
        {
          "name": "monday",
          "value": 251
        },
        {
          "name": "tuesday",
          "value": 297
        },
        {
          "name": "wednesday",
          "value": 325
        },
        {
          "name": "thursday",
          "value": 272
        },
        {
          "name": "friday",
          "value": 307
        }
      ]
    },
  
    {
      "name": "MSFT",
      "series": [
        {
          "name": "monday",
          "value": 260
        },
        {
          "name": "tuesday",
          "value": 216
        },
        {
          "name": "wednesday",
          "value": 261
        },
        {
          "name": "thursday",
          "value": 300
        },
        {
          "name": "friday",
          "value": 254
        }
      ]
    },
    {
      "name": "TWTR",
      "series": [
        {
          "name": "monday",
          "value": 111
        },
        {
          "name": "tuesday",
          "value": 90
        },
        {
          "name": "wednesday",
          "value": 120
        },
        {
          "name": "thursday",
          "value": 80
        },
        {
          "name": "friday",
          "value": 95
        }
      ]
    },
    
    {
      "name": "TOTAL ASSETS",
      "series": [
        {
          "name": "monday",
          "value": 1000
        },
        {
          "name": "tuesday",
          "value": 1005
        },
        {
          "name": "wednesday",
          "value": 1010
        },
        {
          "name": "thursday",
          "value": 995
        },
        {
          "name": "friday",
          "value": 1111
        }
      ]
    },
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
