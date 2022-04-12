import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public userService: UsersService, private router: Router) {}
  logout() {
    this.userService.userLogout();
  }
  ngOnInit(): void {}

  GoToMovie() {
    this.router.navigate(['/movies']);
  }
}
