import {Component, OnInit, Inject} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  template: `
    <p>
      login Works!
    </p>
    <div>
    <input #usernameRef type="text">
    <input #passwordRef type="password">
    <button (click)="onClick(usernameRef.value,passwordRef.value)">Login</button>
</div>
  `,
  styles: []
  ,
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService) { }

  ngOnInit() {
  }

  onClick(username,password){
    var v = this.service.login(username,password)
    console.log("username:",username," password:",password," @result:",v)
  }

}
