import { Component } from '@angular/core';
import { CorsService } from './cors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'asd';
  constructor(private cors: CorsService) {}

  test() {
    this.cors.test();
  }
}
