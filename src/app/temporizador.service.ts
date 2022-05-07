import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TemporizadorService {
  private temp: number;
  constructor(public bitcoinService: BitcoinService) {}

  temporizador() {
    this.temp = setInterval(() => {
      this.bitcoinService.update();
    }, 3000);
  }
}
