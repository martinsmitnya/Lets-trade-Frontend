import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CorsService {
  constructor(private http: HttpClient) {}

  test() {
    console.log(this.http.get<any>('https://api.chucknorris.io/jokes/random'));
  }
}
