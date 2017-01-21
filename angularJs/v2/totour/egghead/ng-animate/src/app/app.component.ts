import {Component, trigger, state, style} from '@angular/core';

@Component({
  selector: 'app-root',
  animations:[
    trigger('signal',[
      state('go',style({
        'background-color':'green'
      }))
      ,
      state('stop',style({
        'background-color':'red'
      }))
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
