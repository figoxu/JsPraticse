import { Component, OnInit } from '@angular/core';

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
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(username,password){
    console.log("username:",username," password:",password)
  }

}
