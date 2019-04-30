import { Component, OnInit } from '@angular/core';
import {FirestoreService} from "../services/firestore_service";

@Component({
  selector: 'app-spenden',
  templateUrl: './spenden.component.html',
  styleUrls: ['./spenden.component.css']
})
export class SpendenComponent implements OnInit {
  displayText = this.service.spendenTxt;

  constructor(private service: FirestoreService) { }

  ngOnInit() {
  }

}
