import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss'],
})
export class EmailFieldComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  hide = true; //Hide and show password

  //add error message for the email field
  getErrorMessageEmailField() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  //add erroor message for password field
  getErrorMessagePasswordField() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('minlength') ? 'Min characters are 6 !' : '';
  }

  //login onClick function
  Login() {
    console.log('testClick', this.email.status, this.password.status);
    this.email.markAsTouched();
    this.password.markAsTouched();
    this.email.status === 'VALID' && this.password.status === 'VALID'
      ? this.router.navigate(['/movies'])
      : null;
  }

  //Register Function
  Register() {
    console.log('Register');
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}
}
