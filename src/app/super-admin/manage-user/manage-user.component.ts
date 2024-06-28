import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})

export class ManageUserComponent {
logout() {

}
navigateshowUsers() {

}
navigateAdduser() {

}
  
  users: Array<{name:string,email:string,contact:string,designation:string}> = [];
    userForm! : FormGroup;
    editForm:boolean = false;
    formSubmitted:boolean = false;
    ngOnInit(): void {
      this.userForm = new FormGroup({
        name:new FormControl('',[Validators.required,Validators.min(3)]),
        email:new FormControl('',[Validators.required,Validators.email]),
        contact:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
        designation:new FormControl('',[Validators.required])
      })
    }
 
    userSubmitHandler(){
      console.log(this.userForm.value);
      this.users.push(this.userForm.value);
      console.log(this.users);
      this.userForm.reset();
    }
 
    editSubmitHandler(){
      this.users.forEach(user => {
        if(user.email === this.userForm.value.email){
          user.name = this.userForm.value.name;
          user.contact = this.userForm.value.contact;
          user.designation = this.userForm.value.designation;
          user.email = this.userForm.value.email;
        }
      });
      this.editForm = false;
      this.userForm.reset();
   
    }
 
    editHandler(user:any){
      this.editForm = true;
      this.userForm.patchValue({name:user.name,email:user.email,contact:user.contact,designation:user.designation});
    }
}