import { Component, OnInit } from '@angular/core';
import { BloggService } from '../blogg.service';
import { Artikel } from '../artikel-interface';

@Component({
  selector: 'app-startsida',
  templateUrl: './startsida.component.html',
  styleUrls: ['./startsida.component.css']
})
export class StartsidaComponent implements OnInit {
  artikelData: Artikel[] = [];

  constructor(public bloggService: BloggService) { }

  ngOnInit(): void {
    this.artikelData = this.bloggService.getLastArticle();
  }

}
