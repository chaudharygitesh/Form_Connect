import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuthenticate=false;
  constructor(private router:Router) { 
  }
  login(username: string|null|undefined, password: string|null|undefined): boolean {
    if (username === 'Gitesh Chaudhary' && password === 'Pass@12345') {
      localStorage.setItem('token','gitesh');
      this.isAuthenticate = true;
      this.router.navigate(['/home']);
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;

    }
  }
  isAuthenticatedUser(): boolean {
    return this.isAuthenticate;
  }
}
