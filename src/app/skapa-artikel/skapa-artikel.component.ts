import { Component, OnInit, Input } from '@angular/core';
import { BloggService } from '../blogg.service';
import { Artikel } from '../artikel-interface';
import { ArticleModel } from '../article-model';


@Component({
  selector: 'app-skapa-artikel',
  templateUrl: './skapa-artikel.component.html',
  styleUrls: ['./skapa-artikel.component.css']
})
export class SkapaArtikelComponent implements OnInit {
  model: ArticleModel;
  artikelData: Artikel[] = [];
  /*
  title: string;
  author: string;
  article: string;
  time: number;

  onDeleteArticle(selectedArt: Artikel):void {
    this.bloggService.deleteArticle(selectedArt);
    this.artikelData = this.bloggService.getLastArticle();
  }



  onKeyUpTitle(event) {
    this.title = event.target.value;
    console.log(this.title)
  }

  onKeyUpAuthor(event) {
    this.author = event.target.value;
    console.log(this.author)
  }

  onKeyUpArticle(event) {
    this.article = event.target.value;
    console.log(this.article)
  }

  onKeyUpTime(event) {
    this.time = event.target.value;
    console.log(this.time)
  }

*/

  onAddArticle() {
    let artObj = { title: this.model.title, article: this.model.article, author: this.model.author, time: this.model.time };
    this.bloggService.addNewArticle(artObj);
    this.artikelData = this.bloggService.getLastArticle();
  }

  constructor(public bloggService: BloggService) {
  }


  ngOnInit(): void {
    this.model = new ArticleModel('', null , '', '');
    console.log(this.model);
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
