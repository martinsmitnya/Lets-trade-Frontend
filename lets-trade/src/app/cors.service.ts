import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CorsService {
  constructor(private http: HttpClient) {}

  test() {
    const headers = { 'Content-Type': 'application/json', token: 'asd' };
    const body = { username: 'asd', password: 'asd' };
    const config = { body: body, headers: headers };
    return this.http.get<any>('http://localhost:8080/hello', config).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
