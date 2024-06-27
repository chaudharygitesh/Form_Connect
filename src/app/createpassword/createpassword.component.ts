import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrls: ['./createpassword.component.scss']
})
export class CreatepasswordComponent {


  passwordForm: FormGroup;
  submitted = false;
  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';

  constructor() {
    this.passwordForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(20),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(20)])
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.passwordForm.valid) {
      console.log('Form submitted:', this.passwordForm.value);
    }
  }
  checkPasswords(pw: string, cpw: string) {
    this.isConfirmPasswordDirty = true;
  
    if (pw == cpw) {
      
      this.passwordsMatching = true;
      this.confirmPasswordClass = 'form-control is-valid';
    } else {
      this.passwordsMatching = false;
      this.confirmPasswordClass = 'form-control is-invalid';
    }
  }
  togglePasswordVisibility(passwordInput: HTMLInputElement) {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
}










