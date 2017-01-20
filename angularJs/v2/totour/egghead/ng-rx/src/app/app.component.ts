import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/Observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/mapTo'
import {Subject} from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click$ = new Subject();
  clock ;

  constructor(){
    this.clock = Observable.merge(
      this.click$.mapTo("hour"),
      Observable.interval(1000).mapTo("second")
    ).startWith(new Date().toString())
      .scan((acc,curr)=>{
        let accDate = new Date(acc);
        const date = new Date(accDate.getTime());
        if(curr === 'second'){
          date.setSeconds(date.getSeconds()+1);
        }else if (curr === 'hour'){
          date.setHours(date.getHours()+1);
        }
        return date;
      });
  }



}
