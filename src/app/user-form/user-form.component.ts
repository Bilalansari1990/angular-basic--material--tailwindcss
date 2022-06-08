import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  isFormSubmitted = false;
  userData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNumber: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.userForm.valid) {
      let body = {
        ...this.userForm.value,
      };
      this.saveBodyInFireBase(body);
    } else {
      console.log('form error');
    }
  }

  saveBodyInFireBase(body: any) {
    this.http
      .post(
        'https://testing-with-angular-af8b5-default-rtdb.firebaseio.com/userForm.json',
        body
      )
      .subscribe(
        (res) => {
          if (res) {
            this.userForm.reset();
            console.log('form Submitted');
            this.getDataFromFireBase();
          }
        },
        (err) => {
          return console.log(err);
        }
      );
  }

  getDataFromFireBase() {
    this.http
      .get(
        'https://testing-with-angular-af8b5-default-rtdb.firebaseio.com/userForm.json'
      )
      .subscribe(
        (res) => {
          console.log('Data Get', res);
          this.userData = res;
          console.log('Data Get', this.userData);
        },
        (err) => {
          return console.log('data not get', err);
        }
      );
  }
  getButtonStatus() {
    if (this.isFormSubmitted) {
      return this.userForm.valid ? 'success' : 'warn';
    } else {
      return 'primary';
    }
  }
}
