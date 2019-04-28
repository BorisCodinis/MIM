import {Inject, Injectable} from '@angular/core';
import { AngularFirestore, QueryFn, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {from, Observable} from 'rxjs';
import * as af from  'angularfire2';
import {tap, timestamp} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Chronikelement } from '../models/Chronikelement';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  itemsCollection: AngularFirestoreCollection<Chronikelement>;
  items2 = [];
  kontaktTxt: Observable<any>;

  constructor( private db: AngularFireDatabase, private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('Startseite/Chronikelemente/items');
    //this.items =
    this.afs.collection('Startseite/Chronikelemente/items').snapshotChanges().subscribe(data => {
      this.items2 = [];
      data.forEach( a => {
        let item: any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        this.items2.push(item);
        this.items2.sort((a,b) => {
          return b.ts - a.ts;
        })
      })
    } );
    this.kontaktTxt = this.afs.collection('kontakt').valueChanges();
  }
  getChronikelemente() {
    return this.items2;
  }

  postChronikelement(element: Chronikelement) {
    this.itemsCollection.add({titel: element.titel, subtitel: element.subtitel, inhalt: element.inhalt, ts: new Date().getTime().toString()});
}

  updateChronikelement(item) {
    this.afs.doc('Startseite/Chronikelemente/items/${item.id}').update({

    })
  }

  /*deleteChronikelement(element: Chronikelement) {
    this.db.list().update(element)
  }*/
}
