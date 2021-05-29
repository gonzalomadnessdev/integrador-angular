
import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserObject } from 'src/assets/UserObject';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authorization:AuthorizationService ) { }

  ngOnInit(): void {

  }


  onSubmit(){

    this.authorization.login(
      this.loginForm.controls['email'].value, 
      this.loginForm.controls['password'].value);

    console.log('email: '+ this.loginForm.controls['email'].value);
    console.log('password: '+this.loginForm.controls['password'].value);
    console.log('all: '+JSON.stringify(this.loginForm.value));

    this.loginForm.reset();
  }

}
