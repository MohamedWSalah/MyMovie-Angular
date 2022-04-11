import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = [
    { email: 'test@test', password: 'testtest' },
    { email: 'Moon@Moon', password: 'moonmoon' },
  ];

  loggedUser = '';

  constructor() {}

  getLoggedUser() {
    return this.loggedUser;
  }

  //Validating if user name and passwords existing.
  userValidate(email: string, password: string) {
    this.loggedUser;
    let foundUser = this.users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      this.loggedUser = foundUser.email;
      console.log(this.loggedUser);
      return true;
    }
    return false;
  }

  //Registering new user.
  userRegister(email: string, password: string) {
    this.users.find((user) => user.email === email)
      ? null
      : this.users.push({ email, password });
  }
}
