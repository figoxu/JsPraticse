import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/Observable/interval'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  clock = Observable.interval(1000);

  constructor(){
    this.clock.subscribe(console.log.bind(console))
  }

}
