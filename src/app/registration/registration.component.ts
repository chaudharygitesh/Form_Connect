import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface Country {
  name: string;
  states: string[];
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {

  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';
  submitted = false;
    registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}"),Validators.maxLength(10)]),
      address: new FormControl('', [Validators.required,Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      gender: new FormControl('', Validators.required),
      password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ]),
      ConfirmPassword: new FormControl('',[Validators.required]),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    });

    togglePasswordVisibility(passwordInput: HTMLInputElement) {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    }
      selectedCountry = '';
      selectedState = '';
      countries: Country[] = [
        { name: 'Select a country', states: ['Select a state'] },
        {
          name: 'India',
          states: [
            'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa',
            'Gujarat', 'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
            'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan',
            'Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal'
          ]
        },
        {
          name: 'US',
          states: [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
          ]
        }
      ];
      filteredStates: string[] = [];
     
      onCountryChange() {
        const selectedCountry = this.countries.find(c => c.name === this.selectedCountry);
        this.filteredStates = selectedCountry ? selectedCountry.states : [];
        this.selectedState = '';
      }
    
    onSubmit() {
      this.submitted = true;
      if (this.registrationForm.valid) {
        console.log('Form submitted:', this.registrationForm.value);
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
   
}
