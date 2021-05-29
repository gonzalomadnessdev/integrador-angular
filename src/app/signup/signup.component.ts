import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authorization:AuthorizationService) { }

  ngOnInit(): void {
  }



  onSubmit(){

    this.authorization.register(
      this.signupForm.controls['username'].value,
      this.signupForm.controls['email'].value, 
      this.signupForm.controls['password'].value );

    console.log('email: '+ this.signupForm.controls['email'].value);
    console.log('password: '+this.signupForm.controls['password'].value);
    console.log('all: '+JSON.stringify(this.signupForm.value));
    
  }

  


}
