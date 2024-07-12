import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopapiService } from 'src/app/service/shopapi.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent {
  constructor(private router :Router,private shopapiservice:ShopapiService) {}
  adminlogin(){
    this.router.navigate(['/AdminLogin']);
  }

  sellerPortal(){
    this.router.navigate(['/Sellerportal']);
  }
  register(){
    this.router.navigate(['/Register'])
  }
  logout() {}
  users: Array<{
    name: string;
    email: string;
    contact: string;
    designation: string;
    password: string;
  }> = [];
  userForm!: FormGroup;
  editForm: boolean = false;
  formSubmitted: boolean = false;

  Isactive = false;
  storedData: any = [];
  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.min(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
    });
      this.shopapiservice.getdatasellercred().subscribe((res)=>{
        this.storedData = res;
        console.log(res);
      });

    // let stored = localStorage.getItem('users');
    } 

 
  userSubmitHandler() {
    console.log(this.userForm.value);
    // this.users.push();
    console.log(this.users);
    // this.userForm.reset();
    var obj1 = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      contact: this.userForm.value.contact,
      designation: this.userForm.value.designation,
      password: this.userForm.value.password,
      status: 0,
    };

    let arr: any = [];
    // if (localStorage.getItem('users') == null) {
    //   localStorage.setItem('users', JSON.stringify(arr));
    // }

    // let stored = localStorage.getItem('users');
    // this.storedData = stored != null ? JSON.parse(stored) : null;
    // this.storedData.push(obj1);
    // localStorage.setItem('users', JSON.stringify(this.storedData));
    console.log(this.storedData);
  }
  // editSubmitHandler() {
  //   this.users.forEach((user) => {
  //     if (user.email === this.userForm.value.email) {
  //       user.name = this.userForm.value.name;
  //       user.contact = this.userForm.value.contact;
  //       user.designation = this.userForm.value.designation;
  //       user.email = this.userForm.value.email;
  //       user.password = this.userForm.value.password;
  //     }
  //   });
  //   this.editForm = false;
  //   this.userForm.reset();
  // }

  activehandle(email: any) {
      this.storedData.forEach(
        (user: {
          name: any;
          contact: any;
          designation: any;
          email: any;
          password: any;
          status: any;
        }) => {
          if (user.email === email) {
            if(user.status==0){
              user.status=1;
            }
            else{
              user.status=0;
            }
          }
        }
      );
      // localStorage.setItem('users', JSON.stringify(this.storedData));

  }
  onSubmit(){
    this.shopapiservice.postdatasellercred(this.userForm.value)
    .subscribe((rest) => {
      console.log(rest);
    });
    this.shopapiservice.getdatasellercred().subscribe((res)=>{
      this.storedData = res;
      console.log(res);
    });
  }
  deleteHandle(id: any) {
    this.shopapiservice.deletesellercred(id)
    .subscribe((rest) => {
      this.shopapiservice.getdatasellercred().subscribe((res)=>{
        this.storedData = res;
        console.log(res);
      });
    });
    
    // this.storedData.forEach(
      // (user: {
      //   name: any;
      //   contact: any;
      //   designation: any;
      //   email: any;
      //   password: any;
      //   status: any;
      // }) => {
        // if (user.email === email) {
        //   this.storedData = this.storedData.filter(
        //     (u: {
        //       name: any;
        //       contact: any;
        //       designation: any;
        //       email: any;
        //       password: any;
        //     }) => u.email !== email
        //   );
          // localStorage.setItem('users', JSON.stringify(this.storedData));
        // }
      // }
    // );
  }
  uniqueId:number=0;
  editHandler(user: any,id:any) {
    this.editForm = true;
    this.userForm.patchValue({
      id:user.id, 
      name: user.name,
      email: user.email,
      contact: user.contact,
      designation: user.designation,
      password: user.password,
    });
    this.uniqueId = id;
    }
    onlylettervalidate(e:any){
      return (e.charCode>=65 && e.charCode<=90)||
      (e.charCode>=97 && e.charCode<=122)
    }
    onlynumbervalidate(e:any){
      return (e.charCode>=48 && e.charCode<=57)||
      (e.charCode>=48 && e.charCode<=57)}
      getandupdate(){
        this.shopapiservice.getdatasellercred().subscribe((res)=>{
          this.storedData = res;
          console.log("hello get",this.storedData);
        });
      }
    editSubmitHandler() {
      console.log(this.userForm.value);
      this.shopapiservice.updatesellerred(this.userForm.value)
       .subscribe((res) => {
          console.log("response",res);
          this.getandupdate();
        },(error) => {
          console.log("error",error);
        });
      this.editForm = false;
      this.userForm.reset();
      
    }
}
