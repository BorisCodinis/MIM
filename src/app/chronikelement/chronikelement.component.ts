import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

const chronikelementlist = document.querySelector('#Chronikelementlist');

function renderChronikelements(doc) {
  const card = document.createElement('card');
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

  chronikelementlist.appendChild(card);
}


const config = {
  apiKey: 'AIzaSyCdtpRg5LqS7aBIcM6CfyBl_E4U4LHVR0M',
  authDomain: 'mim-webseite.firebaseapp.com',
  databaseURL: 'https://mim-webseite.firebaseio.com',
  projectId: 'mim-webseite',
  storageBucket: '',
  messagingSenderId: '126443374488'
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.collection('Chronikelemente').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderChronikelements(doc);
  });
});






class Chronikelement {
  constructor(public titel, public subtitel, public inhalt) {}
}







@Component({
  selector: 'app-chronikelement',
  templateUrl: './chronikelement.component.html',
  styleUrls: ['./chronikelement.component.css']
})
export class ChronikelementComponent implements OnInit {
 titel = 'Lurem';
 subtitle = 'Pipsum';
 cardtext = 'Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem ' +
   'IpsumLorem IpsumLorem IpsumLorem Ipsum';
  constructor() { }

  ngOnInit() {
  }

}
