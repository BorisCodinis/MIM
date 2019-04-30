import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Chronikelement } from '../models/Chronikelement';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  itemsCollection: AngularFirestoreCollection<Chronikelement>;
  items2 = [];
  kontaktTxt: Observable<any>;

  constructor( private db: AngularFireDatabase, private afs: AngularFirestore, private toastr: ToastrService) {
    this.itemsCollection = this.afs.collection('Startseite/Chronikelemente/items');
    this.afs.collection('Startseite/Chronikelemente/items').snapshotChanges().subscribe(data => {
      this.items2 = [];
      data.forEach( a => {
        const item: any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.items2.push(item);
        this.items2.sort((a,b) => {
          return b.ts - a.ts;
        });
      });
    } );
    this.kontaktTxt = this.afs.collection('kontakt').valueChanges();
  }
  getChronikelemente() {
    return this.items2;
  }

  postChronikelement(element: Chronikelement) {
    this.itemsCollection.add({id : element.id, titel: element.titel, subtitel: element.subtitel, inhalt: element.inhalt,
      ts: new Date().getTime().toString(), paths: element.paths});
}

  deleteChronikelement(elementid: string) {
    this.afs.doc(`Startseite/Chronikelemente/items/${elementid}`).delete().then(a => {
      this.toastr.show('Element gelöscht', 'Aktion Erfolgreich');
    });

  }

  updateChronikelement(item) {
    this.afs.doc('Startseite/Chronikelemente/items/${item.id}').update({

    });
  }

}
