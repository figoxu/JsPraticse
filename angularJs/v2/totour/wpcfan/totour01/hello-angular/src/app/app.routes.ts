import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {TodoComponent} from "./todo/todo.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  }
];

export const routing = RouterModule.forRoot(routes);
