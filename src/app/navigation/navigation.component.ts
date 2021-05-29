import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  user :any;
   
  

  constructor(private authorization:AuthorizationService) { }

  ngOnInit(): void {    

  }



}
