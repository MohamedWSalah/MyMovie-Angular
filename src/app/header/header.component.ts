import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public userService: UsersService) {}
  logout() {
    this.userService.userLogout();
  }
  ngOnInit(): void {}
}
