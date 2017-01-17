import {Component, OnInit, Inject} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  template: `
    <p>
      login Works!
    </p>
    <div>
    <input #usernameRef="ngModel" [(ngModel)]="username" type="text" required minlength="3">
        {{ usernameRef.errors | json }}
        <div *ngIf="usernameRef.errors?.required">this is required</div>
        <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
    
    <input #passwordRef="ngModel" [(ngModel)]="password" type="password" required minlength="3">
        <div *ngIf="passwordRef.errors?.required">this is required</div>
    <button (click)="onClick(usernameRef.value,passwordRef.va)">Login</button>
</div>
  `,
  styles: []
  ,
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  username=""
  password=""

  constructor(private service:AuthService) { }

  ngOnInit() {
  }

  onClick(){
    var v = this.service.login(this.username,this.password)
    console.log("username:",this.username," password:",this.password," @result:",v)
  }

}