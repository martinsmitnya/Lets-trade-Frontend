import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'date-picker-component',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent {
  @Output() public onSelect = new EventEmitter<Date>();

  public onDateChange(date: Date): void {
    this.onSelect.emit(date);
  }
}
