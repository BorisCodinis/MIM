import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
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
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { environment} from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from './services/firestore_service';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService} from "./services/auth.service";
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddChronikelementFormComponent } from './addChronikelementForm/addChronikelementForm.component';
import { SanitizeHtmlPipe } from './SanitizeHtmlPipe';
import { QuillModule } from 'ngx-quill';
import { ToastrModule } from "ngx-toastr";
import {StorageService} from "./services/storage.service";

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
    FooterComponent,
    LoginComponent,
    AddChronikelementFormComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    // AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    QuillModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],

  providers: [
    FirestoreService,
    AuthService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
