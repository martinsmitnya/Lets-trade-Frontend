import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isLoggedIn } from './isLoggedIn';

@Injectable({
  providedIn: 'root',
})
export class TradeApiService {
  url: string = 'http://localhost:8080';
  token: any = undefined;

  constructor(private http: HttpClient) {}

  register(name: string, password: string, email: string) {
    const headers = { 'content-Type': 'application/json' };
    const body = {
      username: name,
      password: password,
      email: email,
    };
    return this.http.post<any>(`${this.url}/register`, body, { headers });
  }

  login(name: string, password: string, email: string) {
    const headers = { 'content-Type': 'application/json' };
    const body = {
      username: name,
      password: password,
      email: email,
    };
    return this.http.post<any>(`${this.url}/login`, body, { headers });
  }

  getStock() {
    if (isLoggedIn()) {
      this.token = localStorage.getItem('token');
    }
    const headers = {
      token: this.token,
    };
    return this.http.get<any>(`${this.url}/stock`, { headers });
  }

  tradeStock(endpoint: string, symbol: string, amount: number, date?: any) {
    if (isLoggedIn()) {
      this.token = localStorage.getItem('token');
    }
    let body = JSON.stringify({
      symbol: symbol,
      amount: amount,
      date: Date.parse(date) || undefined,
    });
    let headers = {
      'Content-Type': 'application/json',
      token: this.token || '',
    };
    if (endpoint === 'sell') {
      return this.http.put<any>(`${this.url}/stock`, body, { headers });
    } else {
      return this.http.post<any>(`${this.url}/stock`, body, { headers });
    }
  }
}
