import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


import { LayoutPageComponent,LoginPageComponent,RegisterPageComponent } from './auth';





const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children: [
      { path: 'login', component: LoginPageComponent},
      { path: 'new-account', component: RegisterPageComponent},
      { path: '**', redirectTo: 'login'}
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild( routes )],
  exports: [ RouterModule ],
})
export class AuthRoutingModule { }
