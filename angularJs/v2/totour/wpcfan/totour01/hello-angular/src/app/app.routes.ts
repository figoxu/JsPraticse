import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing = RouterModule.forRoot(routes);
