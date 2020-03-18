import { Component, OnInit } from '@angular/core';
import { BloggService } from '../blogg.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn : Observable<boolean>;


  constructor(public bloggService: BloggService) {
    this.isLoggedIn = this.bloggService.isLoggedIn();
  }


  ngOnInit(): void {

  }

}
