import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article:any;
  slug:any;

  constructor(private service:ArticlesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.loadArticle(params.slug);
      this.slug = params.slug
    })


  }

  loadArticle(slug){
    this.service.getArticle(slug).subscribe(response => this.article = response.article)
  }
}
