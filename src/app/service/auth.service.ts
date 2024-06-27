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
      // const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA'; // Generate or receive the token from your server
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
