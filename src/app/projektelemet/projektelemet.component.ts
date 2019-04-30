import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore_service';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-projektelemet',
  templateUrl: './projektelemet.component.html',
  styleUrls: ['./projektelemet.component.css']
})
export class ProjektelemetComponent implements OnInit {

  constructor(private service: FirestoreService, private afStorage: StorageService, private authService: AuthService) { }

  ngOnInit() {
  }

}
