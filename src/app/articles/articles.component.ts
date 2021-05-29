import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles = [];
  post : any;


  constructor(private service:ArticlesService) { }

  ngOnInit(): void {
    this.loadArticles()
  }

  loadArticles(){
    this.service.getArticles().subscribe(response => this.articles = response.articles)
  }

  onSreach(author:string,tag:string){

    this.service.getArticles(author,tag).subscribe(response => this.articles = response.articles)
  }
}
