import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserObject } from 'src/assets/UserObject';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  readonly baseUrl = "https://conduit.productionready.io/api"

  user = new UserObject() ;

  

  constructor(private http: HttpClient) {
    
   }

  login(email:string, password:string){

    this.http.post<any>(`${this.baseUrl}/users/login`,
    {"user":{
        "email": email,
        "password": password}}
    ).subscribe(response =>{ this.user = response.user;})
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       Authorization: 'Token '+this.user.token
  //     })
  // };  
  }

  clearUser(){
    this.user.id = null;
    this.user.username = '';
    this.user.email = '';
    this.user.createdAt = '';
    this.user.updatedAt = '';
    this.user.bio = '';
    this.user.image = null;
    this.user.token = '';
  }

  register(username:string,email:string, password:string){
    this.http.post<any>(`${this.baseUrl}/users`,
    {"user":{
        "username" : username,
        "email": email,
        "password": password}}
    ).subscribe(response =>{ this.user = response.user;})
  }

  getCurrentUser(){
    
    const url = `${this.baseUrl}/user`;
    return this.http.get<any>(url)
    
  }
  

}
