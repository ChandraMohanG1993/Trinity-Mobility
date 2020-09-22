import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'FirstcliProgramm';
  public years = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
  ];
  public launch = [true, false];
  public land = [true, false];
  public result;
  constructor(
    public ser: ServiceService
  ) {
  }
  ngOnInit() {
    this.fun_call();
  }
   // tslint:disable-next-line: member-ordering
   private default = {
    launch_success: true,
    land_success: true,
    launch_year: 2014
  };
  public fun_land(land) {
    this.default.land_success = land;
    this.result = null;
    this.ser.call(this.default).subscribe(res => {
      this.result = res;
    });
  }
  public fun_launch(launch) {
    this.default.launch_success = launch;
    this.result = null;
    this.ser.call(this.default).subscribe(res => {
      this.result = res;
    });
  }
  public fun_year(year) {
    this.default.launch_year = year;
    this.result = null;
    this.ser.call(this.default).subscribe(res => {
      this.result = res;
    });
  }
  public fun_call(){
    const d = {
    }
    this.result = null;
    this.ser.call(d).subscribe(res => {
      console.log(res);
      this.result = res;
    });
  }
}
export interface Default {
  launch_success: boolean;
  land_success: boolean;
  launch_year: number;
}

