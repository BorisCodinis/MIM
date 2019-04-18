import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {emitKeypressEvents} from 'readline';


const elementList: string [][] = new Array();
// const elementList = new Array<Array<string>>();

function fillList(doc, ind) {
  elementList.push(doc.data().titel.toString());
  elementList.push(doc.data().subtitel.toString());
  elementList.push(doc.data().inhalt.toString());
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
firebase.initializeApp(config);
const db = firebase.firestore();
db.collection('Chronikelemente').get().then((snapshot) => {
  let ind = 0;
  snapshot.docs.forEach(doc => {
    fillList(doc, ind);
    ind++;
    console.log(elementList.pop());
    console.log(elementList.pop());
    console.log(elementList.pop());
    console.log(elementList.pop());
    console.log(elementList.pop());
  });
});


class Chronikelement {
  constructor() {}
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
