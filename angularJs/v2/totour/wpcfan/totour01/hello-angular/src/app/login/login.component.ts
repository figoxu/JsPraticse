import {Component, OnInit, Inject} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  template: `
    <p>
      login Works!
    </p>
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
          <input name="username" #usernameRef="ngModel" [(ngModel)]="username" type="text" required minlength="3">
              <div *ngIf="usernameRef.errors?.required">this is required</div>
              <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
          
          <input name="password" #passwordRef="ngModel" [(ngModel)]="password" type="password" required minlength="3">
              <div *ngIf="passwordRef.errors?.required">this is required</div>
          <button (click)="onClick()">Login</button>
          <button type="submit" >Submit</button>
        </fieldset>
      </form>
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

  onSubmit(formValue) {
    console.log("onSubmit:",formValue);
    console.log(this.service.login(formValue.login.username, formValue.login.password));
  }

  onClick(){
    var v = this.service.login(this.username,this.password)
    console.log("username:",this.username," password:",this.password," @result:",v)
  }

}
