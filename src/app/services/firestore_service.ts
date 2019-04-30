import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Chronikelement } from '../models/Chronikelement';
import { ToastrService } from 'ngx-toastr';
import {Projektelement} from '../models/Projektelement';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  chronikelementeCollection: AngularFirestoreCollection<Chronikelement>;
  projektelementeCollection: AngularFirestoreCollection<Chronikelement>;
  chronikelementList = [];
  projektelementList = [];
  kontaktTxt = [];
  wirTxt = [];
  spendenTxt = [];

  constructor( private db: AngularFireDatabase, private afs: AngularFirestore, private toastr: ToastrService) {
    this.chronikelementeCollection = this.afs.collection('Startseite/Chronikelemente/items');
    this.chronikelementeCollection.snapshotChanges().subscribe(data => {
      this.chronikelementList = [];
      data.forEach( a => {
        const item: any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.chronikelementList.push(item);
        this.chronikelementList.sort((a, b) => {
          return b.ts - a.ts;
        });
      });
    } );

    this.projektelementeCollection = this.afs.collection('Projektseite/Projektelemente/items');
    this.projektelementeCollection.snapshotChanges().subscribe(data => {
      this.projektelementList = [];
      data.forEach( a => {
        const item: any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.projektelementList.push(item);
        this.projektelementList.sort((a, b) => {
          return b.ts - a.ts;
        });
      });
    } );

    this.afs.collection('kontakt').snapshotChanges()
      .subscribe(e => {
        e.forEach(elem => {
          const item: any = elem.payload.doc.data();
          this.kontaktTxt.push(item);
          console.log(item);
        });
      });

    this.afs.collection('wir').snapshotChanges()
      .subscribe(e => {
        e.forEach(elem => {
          const item: any = elem.payload.doc.data();
          this.wirTxt.push(item);
          console.log(item);
        });
      });

    this.afs.collection('spenden').snapshotChanges()
      .subscribe(e => {
        e.forEach(elem => {
          const item: any = elem.payload.doc.data();
          this.spendenTxt.push(item);
          console.log(item);
        });
      });
  }
  getChronikelemente() {
    return this.chronikelementList;
  }

  postChronikelement(element: Chronikelement) {
    console.log(element.titel, element.subtitel, element.inhalt, element.paths);
    this.chronikelementeCollection.add({id : element.id, titel: element.titel, subtitel: element.subtitel, inhalt: element.inhalt,
      ts: new Date().getTime().toString(), paths: element.paths});
  }
  postProjektelement(element: Projektelement) {
    console.log(element.titel, element.subtitel, element.inhalt, element.paths);
    this.projektelementeCollection.add({id : element.id, titel: element.titel, subtitel: element.subtitel, inhalt: element.inhalt,
      ts: new Date().getTime().toString(), paths: element.paths});
  }

  deleteChronikelement(elementid: string) {
    this.afs.doc(`Startseite/Chronikelemente/items/${elementid}`).delete().then(a => {
      this.toastr.show('Element gelöscht', 'Aktion Erfolgreich');
    });
  }

  deleteProjektelement(elementid: string) {
    console.log(elementid);
    this.afs.doc(`Projektseite/Projektelemente/items/${elementid}`).delete().then(a => {
      this.toastr.show('Element gelöscht', 'Aktion Erfolgreich');
    });
  }

}
