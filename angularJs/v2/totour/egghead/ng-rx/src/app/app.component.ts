import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/Observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/mapTo'
import {Subject} from "rxjs/Rx";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click$ = new Subject();
  clock ;

  constructor(store:Store<any>){
    this.clock = store.select("clock");
    Observable.merge(
      this.click$.mapTo("hour"),
      Observable.interval(1000).mapTo("second")
    ).subscribe((type)=>{
      store.dispatch({type})
    })
  }



}
