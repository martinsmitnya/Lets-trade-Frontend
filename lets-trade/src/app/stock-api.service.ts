import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StockApiService {
  stockToken: string =
    '/quote/latestPrice?token=pk_43d014a4f72d4ec49c93d74d0046b73b ';
  companyList = ['goog', 'fb', 'msft', 'twtr'];
  url: string = `https://cloud.iexapis.com/stable/stock/`;

  constructor(private http: HttpClient) {}

  getAllStock() {
    let stocks: any = [];
    this.companyList.forEach((company: string) => {
      stocks.push(this.http.get<number>(this.url + company + this.stockToken));
    });
    return stocks;
  }

  async getStock(company: string) {
    await this.http
      .get<number>(this.url + company + this.stockToken)
      .subscribe({
        next: (data) => {
          console.log(data);
          return { company: data };
        },
      });
  }
}
