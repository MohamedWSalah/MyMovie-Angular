import { Injectable } from '@angular/core';
import { UsersService } from '../shared/users.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UsersService) {}

  isLogged() {
    return this.userService.getLoggedUser() === '' ? false : true;
  }
}
