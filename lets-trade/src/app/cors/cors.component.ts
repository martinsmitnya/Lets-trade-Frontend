import { Component, OnInit } from '@angular/core';
import { CorsService } from '../cors.service';

@Component({
  selector: 'app-cors',
  templateUrl: './cors.component.html',
  styleUrls: ['./cors.component.css'],
})
export class CorsComponent implements OnInit {
  constructor(private cors: CorsService) {}

  log() {
    this.cors.test();
  }

  ngOnInit() {}
}
