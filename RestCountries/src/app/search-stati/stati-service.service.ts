import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatiServiceService {

  constructor(private http: HttpClient) { }

  search(query: string) {
    const url = `https://restcountries.eu/rest/v2/name/${query}`
    return this.http.get(url);
  }
  getNation(query: string){
    const url = `https://restcountries.eu/rest/v2/alpha/${query}`
    return this.http.get(url);
  }
}
