import { Component, OnInit } from '@angular/core';
import { BloggService } from '../blogg.service';
import { Artikel } from '../artikel-interface';
import { Observable } from "rxjs";

@Component({
  selector: 'app-alla-titlar',
  templateUrl: './alla-titlar.component.html',
  styleUrls: ['./alla-titlar.component.css']
})
export class AllaTitlarComponent implements OnInit {
  artikelData: Artikel[] = [];
  isLoggedIn : Observable<boolean>;

  onDeleteArticle(selectedArt: Artikel):void {
    this.bloggService.deleteArticle(selectedArt);
    this.artikelData = this.bloggService.getArtikles();
  }



  constructor(public bloggService: BloggService) { }

  ngOnInit()  {
    this.artikelData = this.bloggService.getArtikles();
    this.isLoggedIn = this.bloggService.isLoggedIn();
  }

}
