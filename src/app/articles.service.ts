import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserObject } from 'src/assets/UserObject';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})



export class ArticlesService {

  readonly baseUrl = "https://conduit.productionready.io/api/articles"
  user : UserObject;

  constructor(private http : HttpClient) { }

  

  
  getArticle(slug:string){
    const url = `${this.baseUrl}/${slug}`;
    return this.http.get<any>(url);
  }

  getArticles(author="",tag="")
  {
    if(author && tag){
      const url = `${this.baseUrl}?tag=${tag}&author=${author}&limit=100`;
      return this.http.get<any>(url);
    }else
    if(author && !tag){
      const url = `${this.baseUrl}?author=${author}&limit=100`;
      return this.http.get<any>(url);
    }else
    if(!author && tag){
      const url = `${this.baseUrl}?tag=${tag}&limit=100`;
      return this.http.get<any>(url);
    }else{
      const url = `${this.baseUrl}?limit=100`;
      return this.http.get<any>(url);
    }




    
  }

};