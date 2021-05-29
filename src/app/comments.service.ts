import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  readonly baseUrl = "https://conduit.productionready.io/api/articles";
  


  constructor(private http:HttpClient , private authorization:AuthorizationService) { }

  getComments(slug){
    const url = `${this.baseUrl}/${slug}/comments`;
    return this.http.get<any>(url);
  }

  postComment(slug:string,commentBody:string){

    const url = `${this.baseUrl}/${slug}/comments`;
    const token = this.authorization.user.token;
  
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": 'Token '+this.authorization.user.token
      })
    };

    const commentObj= {"comment": {
      "body": commentBody
    }}
    console.log(token)
    return this.http.post<any>(url,commentObj,httpOptions)
  }
}
