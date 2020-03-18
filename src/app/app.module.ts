import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartsidaComponent } from './startsida/startsida.component';
import { SenasteArtiklarComponent } from './senaste-artiklar/senaste-artiklar.component';
import { AllaTitlarComponent } from './alla-titlar/alla-titlar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SkapaArtikelComponent } from './skapa-artikel/skapa-artikel.component';

@NgModule({
  declarations: [
    AppComponent,
    StartsidaComponent,
    SenasteArtiklarComponent,
    AllaTitlarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SkapaArtikelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
