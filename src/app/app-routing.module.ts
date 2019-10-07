import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuardServiceService} from './auth/auth-guard-service.service';
import {AuthGuard1ServiceService} from './auth/auth-guard1-service.service';
import {ManagerComponent} from './manager/manager.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard1ServiceService]

  },
  {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path: 'signup',
    component: RegisterComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
