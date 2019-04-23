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
import { ChronikelementComponent } from './chronikelement/chronikelement.component';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import {environment} from '../environments/environment';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FirestoreService} from './services/firestore_service';
import { ModalComponent } from './modal/modal.component';


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
    StartseiteComponent,
    ChronikelementComponent,
    ModalComponent,
    // FirestoreService
  ],
  imports: [
    // AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],

  providers: [FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
