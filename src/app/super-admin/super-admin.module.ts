import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ManageUserComponent } from './manage-user/manage-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



@NgModule({
  declarations: [
    ManageUserComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SuperAdminModule { }
