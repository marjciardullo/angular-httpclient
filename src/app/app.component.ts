import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { GithubService } from './github.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'HttpClient';

  constructor(
    public githubService: GithubService,
    public bitcoinService: BitcoinService
  ) {}

  ngOnInit() {
    this.githubService.update();
    this.bitcoinService.update();
  }

  updateBitcoinRates() {
    this.bitcoinService.update();
  }
}
