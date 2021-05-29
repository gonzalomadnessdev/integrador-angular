import { Component, OnInit } from '@angular/core';
import { UserObject } from 'src/assets/UserObject';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  user:any
  constructor(private authorization:AuthorizationService) { }

  ngOnInit(): void {
    this.user = '';}

  logout(){
    this.authorization.clearUser();
  }
}
