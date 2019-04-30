import { Component, OnInit } from '@angular/core';
import { Chronikelement} from '../models/Chronikelement';
import { AngularFireStorage } from 'angularfire2/storage';
import { FirestoreService } from '../services/firestore_service';
import { AuthService } from '../services/auth.service';

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

