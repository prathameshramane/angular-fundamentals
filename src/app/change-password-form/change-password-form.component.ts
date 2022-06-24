import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordFormValidators } from './change-password-form.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  form = new FormGroup({
    oldPassword: new FormControl("",
      Validators.required,
      ChangePasswordFormValidators.validateOldPassword),
    newPassword: new FormControl("",
      Validators.required),
    confirmPassword: new FormControl("",
      [Validators.required])
  },
    ChangePasswordFormValidators.confirmNewPassword
  )

  submit() {
    console.log(this.form.value)
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
