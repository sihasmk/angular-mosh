import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.css'
})
export class ChangePasswordFormComponent {
  form = new FormGroup({
    oldPassword: new FormControl("", [Validators.required], [PasswordValidators.oldPasswordInvalid]),
    changePassword: new FormGroup({
      newPassword: new FormControl("",[
                                    Validators.required,
                                    Validators.minLength(8),
                                  ],
                                  [
                                  ]),
  
      confirmPassword: new FormControl("", [
                                     Validators.required, 
                                    ])
    }, [PasswordValidators.passwordsShouldMatch])
  })

  get oldPassword() {
    return this.form.get("oldPassword");
  }
  
  get changePassword() {
    return this.form.get("changePassword");
  }

  get newPassword() {
    return this.form.get("changePassword.newPassword");
  }

  get confirmPassword() {
    return this.form.get("changePassword.confirmPassword");
  }

  log() {
    console.log(this.oldPassword, this.newPassword, this.confirmPassword);
    
  }
}
