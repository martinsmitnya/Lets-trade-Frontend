import { Component, OnInit } from '@angular/core';
import { TradeApiService } from '../trade-api.service';
import { isLoggedIn } from '../isLoggedIn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(private tradeApi: TradeApiService, private router: Router) {}
  ngOnInit() {
    if (!isLoggedIn()) {
      this.router.navigate(['']);
    }
  }
}
