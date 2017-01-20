import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/Observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/scan'
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
      this.click$,
      Observable.interval(5000)
    ).startWith(new Date())
      .scan((acc:Date,curr)=>{
        const date = new Date(acc.getTime());
        date.setSeconds(date.getSeconds()+1)
        return date;
      });
  }



}
