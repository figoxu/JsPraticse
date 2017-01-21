import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/Observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/mapTo'
import {Subject} from "rxjs/Rx";
import {Store} from "@ngrx/store";
import {SECOND, HOUR} from "../reducers"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click$ = new Subject().map( (value:string)=> ({type:HOUR,payload: parseInt(value) }));
  seconds$ = Observable.interval(1000).mapTo({type:SECOND,payload:3});
  time ;

  constructor(store:Store<any>){
    this.time = store.select("clock");
    Observable.merge(
      this.click$,
      this.seconds$
    ).subscribe(store.dispatch.bind(store))
  }



}
