import {Component, trigger, state, style} from '@angular/core';

@Component({
  selector: 'app-root',
  animations:[
    trigger('signal',[
      state('go',style({
        'background-color':'green'
      }))
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
