import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import {
  CrossFieldErrorMatcher,
  confirmPasswordValidator,
} from './confirm-password.directive';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  errorMatcher = new CrossFieldErrorMatcher();

  signupForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: confirmPasswordValidator }
  );

  constructor(private http: HttpClient,private router:Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signupForm.value);
    this.http
      .post(
        'https://testing-with-angular-af8b5-default-rtdb.firebaseio.com/users.json',
        this.signupForm.value
      )
      .subscribe((res) => {
        console.log(res);
        this.signupForm.reset();
        this.router.navigate(['../auth','login'])
      });
  }
}
