import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UsernameValidators } from './signup-form.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    }),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ], [
      UsernameValidators.shouldBeUnique
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  get username() {
    return this.form.get('username')
  }

  get password() {
    return this.form.get('password')
  }

  get firstName() {
    return this.form.get('account.firstName')
  }

  get lastName() {
    return this.form.get('account.lastName')
  }

  login() {
    console.log(this.form.value)
    // const isValid = authService.login(this.form.values);
    // if(!isValid) {
    this.form.setErrors({
      loginFailed: true
    })
    // }
  }
}
