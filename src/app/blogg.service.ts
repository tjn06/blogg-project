import { Injectable } from '@angular/core';
import { Artikel } from './artikel-interface';
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BloggService {
  data: Artikel[] = [
      { title: 'Sirendjur',
      time: 4,
      article: 'Sirendjur, eller sjökor som de också kallas, är en ordning vattenlevande däggdjur som innefattar tre arter manater samt dugongen (en enda art). Manater lever i vatten utanför Atlantens varmare kustländer och kan väga uppåt 6 00 kg och bli uppåt 4 m långa. Den något mindre dugongen (undre bilden) lever vid Indiska oceanens, östra Afrikas och norra Australiens kustlinjer. Sirendjur håller vanligtvis till på grunt vatten och måste regelbundet upp till ytan för att andas. De ovanliga djuren är inte släkt med sälar och valar, utan elefanter, men de kan inte vistas på land. Sjökor äter växter och har inga naturliga fiender, men de hotas tyvärr av vattenföroreningar. Dessutom dör många individer då de fastnar i fiskenät eller blir påkörda av båtar. Både dugongen och manaterna är intelligenta och snälla djur som kan låta sig klias av nyfikna snorklare.',
      author: 'Arvid Hollstein'},

      { title: 'Bathynomus',
      time: 2,
      article: 'Bathonymus, eller giant isopod på englelska, är ett släkte med några av världens största och konstigaste gråsuggor. Bathonymus livnär sig på döda djur och är faktiskt relativt vanliga på botten i djupa, kalla delar av Atlanten, Stilla havet och Indiska oceanen. De största arterna av jättegråsuggorna kan bli cirka 75 cm långa och väga uppåt 1,7 kg.',
      author: 'Lina Pira'},

      { title: 'Vandrande blad',
      time: 3,
      article: 'Minst lika bra kamouflage som vandrande pinnar har deras släktingar vandrande blad. Arter ur denna insektsfamilj finns i södra Asien och Australien och är extremt svåra att urskilja då de sittter i lövträd. Vandrande blad har breda och platta kroppar med lövlika färger och teckningar, och när de går vaggar de med kroppen för att efterlikna ett löv som vajar i vinden.',
      author: 'Claes Nord'},

      { title: 'Taggagam',
      time: 2,
      article: 'Taggagamen finns i Australien och är en ödla i familjen agamer. Taggagamens ovansida är helt täckt av hårda taggar som ska göra det svårt för rovdjur att svälja den. Den har även en extra stor knöl på nacken som den visar för rovdjur för att lura dem att det är ödlans riktiga huvud. Taggagamen är, trots sitt skräckinjagande yttre med de kusliga taggarna och det märkliga extrahuvudet, helt ofarlig för människor och äter mest myror och växter.',
      author: 'Bertil Fågel'}
  ];

  theArticlesData: Artikel[] = [];

  getArtikles(): Artikel[] {
    return this.data;
  }

  title(): Artikel[] {
    return this.data;
  }

  getLastThreeArticles(): Artikel[] {
    return this.data.slice(0, 3);
  }

  getLastArticle(): Artikel[] {
    return this.data.slice(0, 1);
  }

  deleteArticle(artikel: Artikel) {
    this.data = this.data.filter( art => art.title !== artikel.title );
  }

  addNewArticle(artikel) {
		let articleObject = artikel;
		this.data.unshift(articleObject);
  }


/*-------------------- Login-Logout-Service --------------------*/
  isLoginSubject = new BehaviorSubject<boolean>(false);


  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  login() : void {
    this.isLoginSubject.next(true);
    console.log('Inloggad');
  }

  logout() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
    console.log('Utloggad');
  }

/*-------------------- Login-Logout-Service --------------------*/

  constructor() {

   }
}
