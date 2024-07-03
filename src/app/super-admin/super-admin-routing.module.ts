import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SellerPortalComponent } from './seller-portal/seller-portal.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {
    path:'',
    component:ManageUserComponent
  },
  {
    path:'AdminLogin',component:AdminLoginComponent
  },
  {
    path:'Sellerportal', component:SellerPortalComponent
  },
  {
    path:'men',component:MenComponent
  },
  {
    path:'women',component:WomenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule {
  
 }
