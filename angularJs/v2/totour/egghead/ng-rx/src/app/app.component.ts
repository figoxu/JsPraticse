import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/Observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/withLatestFrom'
import {Subject} from "rxjs/Rx";
import {Store} from "@ngrx/store";
import {SECOND, HOUR,ADVANCE,RECALL} from "../reducers"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click$ = new Subject().map( (value:string)=> ({type:HOUR,payload: parseInt(value) }));
  seconds$ = Observable.interval(1000).mapTo({type:SECOND,payload:3});
  person$ = new Subject().map((value)=>({payload:value,type:ADVANCE}));
  recall$ = new Subject();

  time ;
  people;

  constructor(store:Store<any>){
    this.time = store.select("clock");
    this.people = store.select("people");
    Observable.merge(
      this.click$,
      this.seconds$,
      this.person$,
      this.recall$.withLatestFrom(this.time,(_,y) => y)
        .map((time)=>({type:RECALL,payload:time}))
    ).subscribe(store.dispatch.bind(store))
  }



}
