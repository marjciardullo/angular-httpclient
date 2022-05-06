import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface Repo {
  id: Number;
  full_name: String;
}

@Injectable()
export class GithubService {
  repos: Array<Repo> = [];
  constructor(private http: HttpClient) {}
}
