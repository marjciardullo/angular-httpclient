import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface Response {
  time: {
    updated: string;
  };
  bpi: {
    USD: {
      symbol: string;
      rate_float: number;
    };
    BRL: {
      symbol: string;
      rate_float: number;
    };
  };
}
@Injectable()
export class BitcoinService {
  current: Response;
  list: Array<Response> = [];
  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.current = data;

        let current_usd_rate = this.current.bpi.USD.rate_float;
        let current_brl_rate = this.current.bpi.BRL.rate_float;
        console.log(this.list);
        if (
          current_usd_rate !== this.current.bpi.USD.rate_float ||
          current_brl_rate !== this.current.bpi.BRL.rate_float
        ) {
          this.list.push(data);
        }
      });
  }
}
