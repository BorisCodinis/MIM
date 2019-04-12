import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { WirComponent } from './wir/wir.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { SpendenComponent } from './spenden/spenden.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { StartseiteComponent } from './startseite/startseite.component';


const appRoutes: Routes = [
  { path: 'start', component: StartseiteComponent },
  { path: 'wir', component: WirComponent},
  {
    path: 'projekte',
    component: ProjekteComponent
  },
  { path: 'kontakt',
    component: KontaktComponent
  },
  {
    path: 'spenden',
    component: SpendenComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  { path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'start' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WirComponent,
    ProjekteComponent,
    KontaktComponent,
    SpendenComponent,
    ImpressumComponent,
    StartseiteComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
