
import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserObject } from 'src/assets/UserObject';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formError = false;

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  constructor(private authorization:AuthorizationService  ) { }

  ngOnInit(): void {

  }

  getHttpError(){
    return this.authorization.error;
  }

  onSubmit(){

    if(this.loginForm.valid && this.loginForm.touched){
      this.authorization.login(
        this.loginForm.controls['email'].value, 
        this.loginForm.controls['password'].value);
  
      console.log('email: '+ this.loginForm.controls['email'].value);
      console.log('password: '+this.loginForm.controls['password'].value);
      console.log('all: '+JSON.stringify(this.loginForm.value));
      this.loginForm.reset();
    }else {this.formError = true; this.loginForm.reset();};



    
  }


}
