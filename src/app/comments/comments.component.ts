import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() slug:string;

  comments=[];
  commentBody = new FormControl("");
  constructor(private service:CommentsService) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(){
    this.service.getComments(this.slug).subscribe(response => this.comments = response.comments)
  }

  makeComment(){
    this.service.postComment(this.slug,this.commentBody.value).subscribe(response => this.loadComments());
    this.commentBody.reset();
    

  }
}
