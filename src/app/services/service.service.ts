import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url: string = "https://api.github.com/search/users?q=";

  constructor(private http: HttpClient) { }
  validUser = new EventEmitter<string>();

  getData(name){
    return this.http.get(this.url+name);
  }
  getRepos(name){
    return this.http.get(`https://api.github.com/users/${name}/repos`);
  }
}
