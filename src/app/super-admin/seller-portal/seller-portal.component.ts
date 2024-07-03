import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seller-portal',
  templateUrl: './seller-portal.component.html',
  styleUrls: ['./seller-portal.component.scss']
})
export class SellerPortalComponent {
  constructor(private router :Router,private route : ActivatedRoute) {}
  admin(){
    this.router.navigate(['/ManageUser']);
  }
  Menuser(){
    this.router.navigate(['/men']);
  }
  womenuser(){
    this.router.navigate(['/women']);
  }
  sellers:any;
  emailId:any;
  ngOnInit(){
    this.route.queryParams.subscribe(Params=>{
      this.emailId=Params['email'];
    })
    var arr=localStorage.getItem('users')
    var obj=arr?JSON.parse(arr):[]
    obj.forEach((user: {
      name: any;
      contact: any;
      designation: any;
      email: any;
      password: any;
      status: any;
    })=> {
      if(user.email===this.emailId){
        this.sellers=user;
      }
    });
  }
}
