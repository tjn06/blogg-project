import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllaTitlarComponent } from './alla-titlar/alla-titlar.component';
import { SenasteArtiklarComponent } from './senaste-artiklar/senaste-artiklar.component';
import { StartsidaComponent } from './startsida/startsida.component';
import { SkapaArtikelComponent } from './skapa-artikel/skapa-artikel.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  	// exakt "/blog"
  { path: '', component: StartsidaComponent , pathMatch: 'full' },
  { path: 'startsida', component: StartsidaComponent , pathMatch: 'full' },
  { path: 'alla-artiklar', component: AllaTitlarComponent, pathMatch: 'full' },
  { path: 'senaste-artiklar', component: SenasteArtiklarComponent, pathMatch: 'full' },
  { path: 'skapa-artikel', component: SkapaArtikelComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' }


  // { path: 'about', component: AboutComponent },
	// { path: '**', component: PageNotFoundComponent }
	// vanlig felstavning
	// { path: 'blogg', redirectTo: '/blog' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
