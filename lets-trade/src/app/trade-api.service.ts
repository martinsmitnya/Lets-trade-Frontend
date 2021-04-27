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
    return this.http
      .post<any>(`${this.url}/register`, body, { headers })
      .subscribe({
        next: (data) => console.log('Yey', data),
        error: (error) => console.error('Error: ' + error.error.message),
      });
  }

  login(name: string, password: string, email: string) {
    const headers = { 'content-Type': 'application/json' };
    const body = {
      username: name,
      password: password,
      email: email,
    };
    return this.http
      .post<any>(`${this.url}/login`, body, { headers })
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.error('Error: ' + error.error.message),
      });
  }

  buyStock(symbol: string, amount: number) {
    let body = JSON.stringify({ symbol: symbol, amount: amount });
    let headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`${this.url}/buy`, body, { headers });
  }

  sellStock(symbol: string, amount: number) {
    let body = JSON.stringify({ symbol: symbol, amount: amount });
    let headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`${this.url}/sell`, body, { headers });
  }
}
