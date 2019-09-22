import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url: string = "https://api.github.com/search/users?q=";
  constructor(private http: HttpClient) { }
  getData(name){
    return this.http.get(this.url+name);
  }
}
