import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

// const chronikelementlist = document.querySelector('#Chronikelementlist');

function fillList(doc, ind) {
  elementList[ind][0] = doc.data().titel;
  elementList[ind][1] = doc.data().subtitel;
  elementList[ind][2] = doc.data().inhalt;
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

const elementList: string [][] = [];
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
  let ind = 0;
  snapshot.docs.forEach(doc => {
    fillList(doc, ind);
    ind++;
    console.log(elementList);
  });
});




@Injectable({
  providedIn: 'root'
})
export class ChronikelementServiceService {

  constructor() { }
}
