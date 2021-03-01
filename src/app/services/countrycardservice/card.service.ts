import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  todayDate = moment().format('YYYY-MM-DD');

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(`https://api.exchangeratesapi.io/${this.todayDate}`);
  }

}
