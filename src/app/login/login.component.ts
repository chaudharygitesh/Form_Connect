import { Component, Directive, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { CopyPasteBlockDirective } from './CopyPasteBlock.directive';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})

export class LoginComponent {

  LoginForm=new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ])
})
constructor(private Auth:AuthService,private toastr:ToastrService) {}
onSubmit() {
    if (this.Auth.login(this.LoginForm.value.username,this.LoginForm.value.password)) {
      console.log('Form submitted:', this.LoginForm.value);
      this.toastr.success('login successfully')
    } else {
      console.log('Form is invalid');
    }
  }
}
