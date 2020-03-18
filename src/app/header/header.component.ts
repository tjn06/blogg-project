import { Component, OnInit } from '@angular/core';
import { BloggService } from '../blogg.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : Observable<boolean>;

  constructor(public bloggService: BloggService) {
    this.isLoggedIn = this.bloggService.isLoggedIn();
   }

  ngOnInit(): void {
  }

}
