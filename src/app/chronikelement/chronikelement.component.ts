import { Component, OnInit } from '@angular/core';
import { Chronikelement} from '../models/Chronikelement';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import * as firebase from 'firebase';
import {FirestoreService} from '../services/firestore_service';
import {Observable} from 'rxjs';
import {StorageService} from '../services/storage.service';
import {AuthService} from '../services/auth.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-chronikelement',
  templateUrl: './chronikelement.component.html',
  styleUrls: ['./chronikelement.component.css'],
})

export class ChronikelementComponent implements OnInit {
  chronikelemente: Chronikelement[];

  constructor(private service: FirestoreService, private afStorage: AngularFireStorage, private authService: AuthService) {
  }
  ngOnInit() {
    this.chronikelemente = this.service.chronikelementList;
  }

}

