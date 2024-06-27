import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})

export class AppComponent {
  user = { firstName: '', lastName: '', contact: '' };
  users = [];

  constructor() {
    this.users = JSON.parse(localStorage.getItem('users')) || [];
  }

  onSubmit() {
    this.users.push(this.user);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.user = { firstName: '', lastName: '', contact: '' };
  }

  editUser(index: number) {
    this.user = this.users[index];
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}