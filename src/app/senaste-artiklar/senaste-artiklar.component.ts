import { Component, OnInit } from '@angular/core';
import { BloggService } from '../blogg.service';
import { Artikel } from '../artikel-interface';

@Component({
  selector: 'app-senaste-artiklar',
  templateUrl: './senaste-artiklar.component.html',
  styleUrls: ['./senaste-artiklar.component.css']
})
export class SenasteArtiklarComponent implements OnInit {
  artikelData: Artikel[] = [];



  constructor(public bloggService: BloggService) { }

  ngOnInit(): void {
    this.artikelData = this.bloggService.getLastThreeArticles();
  }

}
