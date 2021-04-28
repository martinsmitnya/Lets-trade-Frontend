import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TradeApiService {
  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  register(name: string, password: string, email: string) {
    const headers = { 'content-Type': 'application/json' };
    const body = {
      username: name,
      password: password,
      email: email,
    };
    return this.http.post<any>(`${this.url}/register`, body, { headers })
  }

  login(name: string, password: string, email: string) {
    const headers = { 'content-Type': 'application/json' };
    const body = {
      username: name,
      password: password,
      email: email,
    };
    return this.http.post<any>(`${this.url}/login`, body, { headers })
  }

  tradeStock(endpoint: string, symbol: string, amount: number, date?: any) {
    let body = JSON.stringify({
      symbol: symbol,
      amount: amount,
      date: Date.parse(date) || undefined,
    });
    console.log(body);
    let headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`${this.url}/${endpoint}`, body, { headers });
  }
}
