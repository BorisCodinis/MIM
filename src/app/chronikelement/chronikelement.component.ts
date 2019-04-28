import { Component, OnInit } from '@angular/core';
import { Chronikelement} from '../models/Chronikelement';
import { AngularFireStorage } from 'angularfire2/storage'
import * as firebase from 'firebase';
import {FirestoreService} from '../services/firestore_service';
import {Observable} from 'rxjs';



const elementList: string [] = new Array();

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

      this.chronikelemente = this.service.getChronikelemente();


  }

}

