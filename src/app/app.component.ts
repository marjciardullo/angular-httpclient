import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { GithubService } from './github.service';
import { TemporizadorService } from './temporizador.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'HttpClient';

  constructor(
    public githubService: GithubService,
    public bitcoinService: BitcoinService,
    public temporizador: TemporizadorService
  ) {}

  ngOnInit() {
    this.githubService.update();
    this.bitcoinService.update();
    //this.temporizador.temporizador();
  }

  updateBitcoinRates() {
    this.bitcoinService.update();
  }
}
