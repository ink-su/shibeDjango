import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from 'src/lib/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  errorMsg: string;
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private userService: UserService) {
  } 

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }

  login() {
    const { username, password } = this.loginForm.value;
    this.userService.loginUser(username, password);
  }
}
