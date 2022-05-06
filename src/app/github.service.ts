import { Injectable } from '@angular/core';
interface Repo {
  id: Number;
  full_name: String;
}

@Injectable()
export class GithubService {
  constructor() {}
}
