import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = [
    { email: 'test@test', password: 'testtest' },
    { email: 'moon@moon', password: 'moonmoon' },
  ];

  loggedUser = sessionStorage.getItem('loggedUser') || '';

  constructor(private router: Router) {}

  getLoggedUser() {
    return this.loggedUser;
  }

  //Validating if user name and passwords existing.
  userValidate(email: string, password: string) {
    let foundUser = this.users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      this.loggedUser = foundUser.email;
      sessionStorage.setItem('loggedUser', this.loggedUser);
      console.log(this.loggedUser);
      return true;
    }
    return false;
  }

  //logout the user if he went to login page.
  userLogout() {
    this.loggedUser = '';
    sessionStorage.removeItem('loggedUser');
    this.router.navigate(['/login']);
  }

  //Registering new user.
  userRegister(email: string, password: string) {
    this.users.find((user) => user.email === email)
      ? null
      : this.users.push({ email, password });
  }
}
