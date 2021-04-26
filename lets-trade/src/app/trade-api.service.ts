import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TradeApiService {
  constructor(private http: HttpClient) {}

  register(name: string, password: string) {
    const headers = { 'content-Type': 'application/json' };
    const body = JSON.stringify({ username: name, password: password });
    const settings = { body, headers };
    return this.http.post<any>('/register', settings).subscribe({
      next: (data) => console.log('Yey', data),
      error: (error) => console.error('Error: ' + JSON.stringify(error)),
    });
  }

  login(name: string, password: string) {
    const headers = { 'content-Type': 'application/json' };
    const body = JSON.stringify({ username: name, password: password });
    const settings = { body, headers };
    return this.http.post<any>('/login', settings).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error('Error: ' + JSON.stringify(error)),
    });
  }
}
