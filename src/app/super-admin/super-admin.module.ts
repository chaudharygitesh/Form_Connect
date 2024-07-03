import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ManageUserComponent } from './manage-user/manage-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SellerPortalComponent } from './seller-portal/seller-portal.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';



@NgModule({
  declarations: [
    ManageUserComponent,
    AdminLoginComponent,
    SellerPortalComponent,
    MenComponent,
    WomenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SuperAdminModule { }
