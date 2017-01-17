import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(username:string,password:string):boolean{
    if(username==="figoxu"&&password==="123456"){
      return true;
    }
    return false;
  }
}
