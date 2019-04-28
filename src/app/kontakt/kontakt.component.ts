import { Component, OnInit } from '@angular/core';
import {FirestoreService} from "../services/firestore_service";

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor(private service: FirestoreService) { }

  ngOnInit() {
  }

}
