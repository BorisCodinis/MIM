import {Inject, Injectable} from '@angular/core';
import { AngularFirestore, QueryFn, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {from, Observable} from 'rxjs';
import * as af from  'angularfire2';
import {tap, timestamp} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Chronikelement } from '../models/Chronikelement';
import {StorageService} from "./storage.service";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  itemsCollection: AngularFirestoreCollection<Chronikelement>;
  items2 = [];
  kontaktTxt: Observable<any>;

  constructor( private db: AngularFireDatabase, private afs: AngularFirestore, private toastr: ToastrService) {
    this.itemsCollection = this.afs.collection('Startseite/Chronikelemente/items');
    //this.items =
    this.afs.collection('Startseite/Chronikelemente/items').snapshotChanges().subscribe(data => {
      this.items2 = [];
      data.forEach( a => {
        let item: any = a.payload.doc.data();
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
    this.itemsCollection.add({id : element.id, titel: element.titel, subtitel: element.subtitel, inhalt: element.inhalt, ts: new Date().getTime().toString(), paths: element.paths});
  }

  deleteChronikelement(elementid: string) {
    this.afs.doc(`Startseite/Chronikelemente/items/${elementid}`).delete().then(a=>{
      this.toastr.show('Element gelöscht', 'Aktion Erfolgreich');
    });

  }

  updateChronikelement(item) {
    this.afs.doc('Startseite/Chronikelemente/items/${item.id}').update({

    })
  }

  /*deleteChronikelement(element: Chronikelement) {
    this.db.list().update(element)
  }*/
}
