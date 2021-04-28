import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { TradeApiService } from '../trade-api.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatePickerComponent } from '../date-picker/date-picker.component';

@Component({
  selector: 'app-stock-trade',
  templateUrl: './stock-trade.component.html',
  styleUrls: ['./stock-trade.component.css'],
})
export class StockTradeComponent implements OnInit {
  @Input() symbol: string = '';
  @Input() amount: number = 3;

  sendForm = this.formBuilder.group({
    amountToSell: 0,
    amountToBuy: 0,
    date: new Date(),
  });

  /*amountToSell: number = 0;
  amountToBuy: number = 0;*/

  constructor(
    private formBuilder: FormBuilder,
    private tradeApi: TradeApiService,
    public dialog: MatDialog
  ) {}

  buyStock() {
    console.log(new Date(this.sendForm.value.date).getTime());
    this.tradeApi.buyStock(this.symbol, this.sendForm.value.amountToBuy);
  }

  sellStock() {
    console.log(this.sendForm.value.amountToSell);
    this.tradeApi.sellStock(this.symbol, this.sendForm.value.amountToSell);
  }

  onSubmit() {}

  openDialog() {
    const dialogRef = this.dialog.open(DatePickerComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /*onKey(event: any) {
    if (event.target.id === 'buyAmount') {
      this.amountToBuy = event.target.value;
    } else if (event.target.id === 'sellAmount') {
      this.amountToSell = event.target.value;
    }
  }*/

  ngOnInit() {}
}
