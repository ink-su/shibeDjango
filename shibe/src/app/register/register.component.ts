import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/lib/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegisterComponent implements OnInit {
  loading = true;
  errorMsg: string;
  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required],
    }, {
      validators: PasswordValidator.MatchPassword,
    })
  }

  register() {
    const { username, password } = this.registerForm.value;
    this.userService.registerUser(username, password).subscribe(() => {
      //Doing register
    });
  }

}

class PasswordValidator { 
  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value;
    let confirmPassword = AC.get('confirmPassword').value;
    return password == confirmPassword ? null:
      AC.get('confirmPassword').setErrors({ MatchPassword: true });
  }
}