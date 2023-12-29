import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private pokeApiUrl = "https://pokeapi.co/api/v2/";
  data: any;
  constructor(
    private http: HttpClient
  ) {

  }

  pokeApiGetMethod(endpoint: string): Observable<any> {
    return this.http.get(this.pokeApiUrl + endpoint);
  }
  
}
