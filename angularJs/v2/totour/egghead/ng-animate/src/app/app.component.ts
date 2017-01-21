import {Component, trigger, state, style, transition, animate, keyframes} from '@angular/core';

@Component({
  selector: 'app-root',
  animations:[
    trigger('signal',[
      state('void', style({
        'transform':'translateY(-100%)'
      })),
      state('go',style({
        'background-color':'green',
        'height':'100px'
      })),
      state('stop',style({
        'background-color':'red',
        'height':'50px'
      })),
      transition('void <=> *', animate(3000, keyframes([
        style({'transform':'scale(0)'}),
        style({'transform':'scale(.1)'}),
        style({'transform':'scale(.9)'}),
        style({'transform':'scale(1)'})
      ]))),
      transition('go <=> stop', animate('0.5s 1s cubic-bezier(0.455, 0.03, 0.515, 0.955)'))
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signal='stop';
  toggleFlag=true;

  onGoClick(){
    this.signal='stop'
  }
  onStopClick(){
      this.signal='go'
  }

  onToggleClick(){
    this.toggleFlag=!this.toggleFlag
  }
}
