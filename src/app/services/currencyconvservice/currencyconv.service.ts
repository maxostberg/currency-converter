import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyconvService {

  constructor(private http: HttpClient) { }

  getCurrency(currency: string): Observable<any>{
    return this.http.get(`https://api.exchangeratesapi.io/latest?base=${currency}`);
  }

}
