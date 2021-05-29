import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserObject } from 'src/assets/UserObject';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  readonly baseUrl = "https://conduit.productionready.io/api"

  user = new UserObject() ;
  error:any = false;
  

  constructor(private http: HttpClient , private route : Router) {
    
   }

  login(email:string, password:string){

    this.http.post<any>(`${this.baseUrl}/users/login`,
    {"user":{
        "email": email,
        "password": password}}
    ).subscribe(response =>{ this.user = response.user; this.route.navigate([''])},error => {this.error = error})
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       Authorization: 'Token '+this.user.token
  //     })
  // };  
  }

  clearUser(){
    this.user = new UserObject();
  }

  register(username:string,email:string, password:string){
    this.http.post<any>(`${this.baseUrl}/users`,
    {"user":{
        "username" : username,
        "email": email,
        "password": password}}
    ).subscribe(response =>{ this.user = response.user; this.route.navigate([''])},error => {this.error = error})
  }


  

}
