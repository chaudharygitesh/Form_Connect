import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {  AuthGuard } from './auth/login.guard';
import { RegistrationComponent } from './registration/registration.component';
import { ReflectComponent } from './reflect/reflect.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';

const routes: Routes = [
  {path:'signup',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate: [AuthGuard]},
  {path:'Register',component:RegistrationComponent},
  {path:'reflect',component:ReflectComponent},
  {path:'passkey',component:CreatepasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
