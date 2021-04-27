import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StockApiService {
  stockToken: string = '/quote/?token=pk_43d014a4f72d4ec49c93d74d0046b73b ';
  companyList = ['googl', 'fb', 'msft', 'twtr'];
  url: string = `https://cloud.iexapis.com/stable/stock/`;

  constructor(private http: HttpClient) {}

  getAllStock() {
    let stocks: any = [];
    this.companyList.forEach((company: string) => {
      stocks.push(this.getStock(company));
    });
    return stocks;
  }

  getStock(company: string) {
    return this.http.get<any>(this.url + company + this.stockToken);
  }

  buyStock(symbol: string) {
    let body = JSON.stringify({ symbol: symbol });
    let headers = new Headers({ 'Content-Type': 'application/json' });
  }
}
