import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.css'],
})
export class AppAlertComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AppAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close({});
  }

  ngOnInit() {
    console.log(this.data);
  }
}
