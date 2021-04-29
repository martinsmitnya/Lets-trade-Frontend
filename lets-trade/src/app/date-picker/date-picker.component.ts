import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'date-picker-component',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  @Input() endpoint: string = '';
  @Input() symbol: string = '';
  @Input() amount: number = 1;

  currentYear = new Date().getFullYear();
  minDate: Date = new Date(Date.now());
  maxDate: Date = new Date(this.currentYear + 1, 11, 31);
  selectedDate: Date = new Date();

  constructor(private dialogRef: MatDialogRef<DatePickerComponent>) {}

  onSubmit() {
    this.dialogRef.close({ date: this.selectedDate });
  }

  ngOnInit() {
    this.minDate.setDate(new Date().getDate() + 1);
    this.selectedDate = this.minDate;
  }
}
