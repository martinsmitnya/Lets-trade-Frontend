import { AppAlertComponent } from './../app-alert/app-alert.component';
import { Component, OnInit, Input } from '@angular/core';
import { TradeApiService } from '../trade-api.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DatePickerComponent } from '../date-picker/date-picker.component';

@Component({
  selector: 'app-stock-trade',
  templateUrl: './stock-trade.component.html',
  styleUrls: ['./stock-trade.component.css'],
})
export class StockTradeComponent implements OnInit {
  @Input() symbol: string = '';
  amount: number = 0;
  value: number = 0;

  sendForm = this.formBuilder.group({
    amount: 1,
  });

  date: any = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private tradeApi: TradeApiService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  buyStock() {
    this.tradeApi
      .tradeStock('buy', this.symbol, this.sendForm.value.amount, this.date)
      .subscribe({
        next: (data) => {
          this.dialog.open(AppAlertComponent, {
            data: {
              message: 'Successful Transition',
            },
          }),
            this.reloadCurrentRoute();
        },
        error: (err) =>
          this.dialog.open(AppAlertComponent, {
            data: {
              message: err.error.message,
            },
          }),
      });
  }

  sellStock() {
    this.tradeApi
      .tradeStock('sell', this.symbol, this.sendForm.value.amount, this.date)
      .subscribe({
        next: (data) => {
          this.dialog.open(AppAlertComponent, {
            data: {
              message: 'Successful Transition',
            },
          }),
            this.reloadCurrentRoute();
        },
        error: (err) =>
          this.dialog.open(AppAlertComponent, {
            data: {
              message: err.error.message,
            },
          }),
      });
  }
  cancelSchedule() {
    this.date = undefined;
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  openDatePicker() {
    const dialogRef = this.dialog.open(DatePickerComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.date = result.date || undefined;
    });
  }

  ngOnInit() {
    this.tradeApi.getStock().subscribe({
      next: (data) => {
        data.stockList.forEach((stock: any) => {
          if (stock.symbol === this.symbol) {
            this.amount += stock.amount;
            this.value += stock.latestPrice;
          }
        });
      },
    });
  }
}
