import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formError = false;

  signupForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  constructor(private authorization:AuthorizationService) { }

  ngOnInit(): void {
  }

  getHttpError(){
    return this.authorization.error;
  }


  onSubmit(){

    if(this.signupForm.valid && this.signupForm.touched){
      this.authorization.register(
        this.signupForm.controls['username'].value,
        this.signupForm.controls['email'].value, 
        this.signupForm.controls['password'].value );
  
      console.log('email: '+ this.signupForm.controls['email'].value);
      console.log('password: '+this.signupForm.controls['password'].value);
      console.log('all: '+JSON.stringify(this.signupForm.value));
      
      this.signupForm.reset();
    }else {this.formError = true; this.signupForm.reset();};


  }

  


}
