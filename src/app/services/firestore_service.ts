import {Inject, Injectable} from '@angular/core';
import { AngularFirestore, QueryFn, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {from, Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import {el} from '@angular/platform-browser/testing/src/browser_util';

import { Chronikelement } from '../models/Chronikelement';


let elementList: string[] = null;
// const elementList = new Array<Array<string>>();

function fillList(doc) {
  elementList.push(doc.data().json);
  /*const card = document.createElement('card');
  card.setAttribute('data-id', doc.id);
  const titel = document.createElement('h2');
  const subtitel = document.createElement('h5');
  const inhalt = document.createElement('p');

  titel.textContent = doc.data().titel;
  subtitel.textContent = doc.data().subtitel;
  inhalt.textContent = doc.data().inhalt;

  card.appendChild(titel);
  card.appendChild(subtitel);
  card.appendChild(inhalt);

  // chronikelementlist.appendChild(card);*/
}

const config = {
  apiKey: 'AIzaSyCdtpRg5LqS7aBIcM6CfyBl_E4U4LHVR0M',
  authDomain: 'mim-webseite.firebaseapp.com',
  databaseURL: 'https://mim-webseite.firebaseio.com',
  projectId: 'mim-webseite',
  storageBucket: '',
  messagingSenderId: '126443374488'
};



/* --------------------- copy ----------------


export abstract class FirestoreService<T> {

  protected abstract basePath: string;

  constructor(
    @Inject(AngularFirestore) protected firestore: AngularFirestore,
  ) {

  }

  doc$(id: string): Observable<T> {
    return this.firestore.doc<T>(`${this.basePath}/${id}`).valueChanges().pipe(
      tap(r => {
        if (!environment.production) {
          console.groupCollapsed(`Firestore Streaming [${this.basePath}] [doc$] ${id}`);
          console.log(r);
          console.groupEnd();
        }
      }),
    );
  }

  collection$(queryFn?: QueryFn): Observable<T[]> {
    return this.firestore.collection<T>(`${this.basePath}`, queryFn).valueChanges().pipe(
      tap(r => {
        if (!environment.production) {
          console.groupCollapsed(`Firestore Streaming [${this.basePath}] [collection$]`);
          console.table(r);
          console.groupEnd();
        }
      }),
    );
  }

  create(value: T) {
    const id = this.firestore.createId();
    return this.collection.doc(id).set(Object.assign({}, { id }, value)).then(_ => {
      if (!environment.production) {
        console.groupCollapsed(`Firestore Service [${this.basePath}] [create]`);
        console.log('[Id]', id, value);
        console.groupEnd();
      }
    });
  }
  delete(id: string) {
    return this.collection.doc(id).delete().then(_ => {
      if (!environment.production) {
        console.groupCollapsed(`Firestore Service [${this.basePath}] [delete]`);
        console.log('[Id]', id);
        console.groupEnd();
      }
    });
  }

  private get collection() {
    return this.firestore.collection(`${this.basePath}`);
  }
}

// --------------------- copy ----------------*/












@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  itemsCollection: AngularFirestoreCollection<Chronikelement>;
  items: Observable<Chronikelement[]>;
  constructor( private db: AngularFireDatabase, private afs: AngularFirestore) {
    this.items = this.afs.collection('Chronikelemente').valueChanges();
  }
getChronikelemente() {
    return this.items;
    /* firebase.initializeApp(config);
    const db = firebase.firestore();
    db.collection('Chronikelemente').get().then((snapshot) => {
       snapshot.docs.forEach((doc) => {
         fillList(doc);
       });
    });
    console.log(elementList);
    return elementList; */
  }
  postChronikelement(titel: string, subtitel: string, inhalt: string) {
    firebase.initializeApp(config);
    const db = firebase.firestore();

}

}


/*
db.collection('Chronikelemente').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.id);
    fillList(doc);
    // const inhalt = elementList.pop();
    // const subtitel = elementList.pop();
    // const titel = elementList.pop();
    // console.log(titel, subtitel, inhalt);
  });
});
return elementList;
}*/
