import {Inject, Injectable} from '@angular/core';
import { AngularFirestore, QueryFn, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {from, Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import {el} from '@angular/platform-browser/testing/src/browser_util';

import { Chronikelement } from '../models/Chronikelement';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  itemsCollection: AngularFirestoreCollection<Chronikelement>;
  items: Observable<any[]>;

  constructor( private db: AngularFireDatabase, private afs: AngularFirestore) {
    this.items = this.afs.collection('Chronikelemente').valueChanges();
  }

  getChronikelemente() {
    return this.items;
  }

  postChronikelement(titel: string, subtitel: string, inhalt: string) {


  }

}
