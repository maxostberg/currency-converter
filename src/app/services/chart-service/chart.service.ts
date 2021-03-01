import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  /* Variables */
  thisDate = moment().format('YYYY-MM-DD');
  oneMonthDate = moment().subtract(1, 'month').format('YYYY-MM-DD');
  twoMonthDate = moment().subtract(2, 'month').format('YYYY-MM-DD');
  threeMonthDate = moment().subtract(3, 'month').format('YYYY-MM-DD');
  fourMonthDate = moment().subtract(4, 'month').format('YYYY-MM-DD');
  fiveMonthDate = moment().subtract(5, 'month').format('YYYY-MM-DD');

  /* Data-functions */

  /* These functions each get the same date as of today and 1, 2, 3, 4, 5 months back. */
  thisDateData(): Observable<any>{
    return this.http.get(`https://api.exchangeratesapi.io/${this.thisDate}`);
  }

  oneMonthData(): Observable<any>{
    return this.http.get(`https://api.exchangeratesapi.io/${this.oneMonthDate}`);
  }
  twoMonthData(): Observable<any>{
    return this.http.get(`https://api.exchangeratesapi.io/${this.twoMonthDate}`);
  }

  threeMonthData(): Observable<any>{
    return this.http.get(`https://api.exchangeratesapi.io/${this.threeMonthDate}`);
  }

  fourMonthData(): Observable<any>{
    return this.http.get(`https://api.exchangeratesapi.io/${this.fourMonthDate}`);
  }

  fiveMonthData(): Observable<any>{
    return this.http.get(`https://api.exchangeratesapi.io/${this.fiveMonthDate}`);
  }


}
