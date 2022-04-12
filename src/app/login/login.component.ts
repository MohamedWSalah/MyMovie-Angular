import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.userService.userLogout();
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  @ViewChild('EPErrorMsg', { static: false }) EPErr: any;

  hide = true; //Hide and show password

  //add error message for the email field
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  //add erroor message for password field
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('minlength') ? 'Min characters are 6 !' : '';
  }

  //login onClick function
  Login() {
    console.log(this.email.status, this.password.status);
    this.EPErr.nativeElement.innerHTML = '';
    this.email.markAsTouched();
    this.password.markAsTouched();

    this.email.status === 'VALID' && this.password.status === 'VALID'
      ? this.userService.userValidate(this.email.value, this.password.value)
        ? this.router.navigate(['/movies'])
        : (this.EPErr.nativeElement.innerHTML = 'Email or password is wrong')
      : null;
  }

  //Register Function
  Register() {
    console.log('Register');
  }
}
