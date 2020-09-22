import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Default} from './app.component';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    public http: HttpClient
  ) { }
  public url = 'https://api.spacexdata.com/v3/launches?limit=100';



  public call(select): Observable<any> {
    if (Object.keys(select).length > 0 ) {
      // tslint:disable-next-line: whitespace
      console.log('molakani');
      
      this.url = this.url+`&launch_success=${select.launch_success}&land_success=${select.land_success}&launch_year=${select.launch_year}`;
     console.log(this.url);
     
    }
   return this.http.get(`${this.url}`);
  }

}
