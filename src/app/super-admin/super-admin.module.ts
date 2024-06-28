import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ManageUserComponent } from './manage-user/manage-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageUserComponent } from './manage-user/manage-user.component';



@NgModule({
  declarations: [
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SuperAdminModule { }
