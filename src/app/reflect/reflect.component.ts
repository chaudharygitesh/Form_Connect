import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reflect',
  templateUrl: './reflect.component.html',
  styleUrls: ['./reflect.component.scss']
})
export class ReflectComponent {
  constructor(private router : Router){}
  ForgetPassword =new FormGroup({
    email: new FormControl('', [Validators.required,Validators.minLength(3),Validators.email]),
    PassKey: new FormControl('',[Validators.required])
});

onSubmit() {

  if (this.ForgetPassword.valid) {
    console.log('Form submitted:', this.ForgetPassword.value);
    if(this.ForgetPassword.value.PassKey === '0000'){
      this.router.navigate(['/passkey']);
    }
    else{
      alert('false');
    }
  }
 
}


// passKeyValidator(control: FormControl): { [key: string]: boolean } | null {
//   const passKey = control.value;
//   if (passKey!== '0000') {
//     return { invalidPassKey: true };
//   }
//   return null;
// }
}
