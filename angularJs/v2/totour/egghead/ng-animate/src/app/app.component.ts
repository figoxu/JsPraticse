import {Component, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'app-root',
  animations:[
    trigger('signal',[
      state('void',style({
        'background-color':'blue',
        'height':'100px'
      })),
      state('go',style({
        'background-color':'green',
        'height':'100px'
      })),
      state('stop',style({
        'background-color':'red',
        'height':'50px'
      })),
      transition('void => *',animate(5000)),
      transition('* => *',animate(500))
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signal='stop'

  onGoClick(){
    if(this.signal==='stop'){
      this.signal='go'
    }else{
      this.signal='stop'
    }
  }
}
