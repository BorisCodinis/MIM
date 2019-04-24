import { Component, OnInit } from '@angular/core';
import { Chronikelement} from '../models/Chronikelement';
import * as firebase from 'firebase';
import {FirestoreService} from '../services/firestore_service';
import {Observable} from 'rxjs';



const elementList: string [] = new Array();
// const elementList = new Array<Array<string>>();








@Component({
  selector: 'app-chronikelement',
  templateUrl: './chronikelement.component.html',
  styleUrls: ['./chronikelement.component.css'],
  providers: [ FirestoreService ]
})

export class ChronikelementComponent implements OnInit {
  chronikelemente: Chronikelement[];

  constructor(private service: FirestoreService) {}

  ngOnInit() {
    this.service.getChronikelemente().subscribe(items => {
      this.chronikelemente = items;
    });
  }

}

