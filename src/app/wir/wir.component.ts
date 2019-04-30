import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../services/firestore_service';

@Component({
  selector: 'app-wir',
  templateUrl: './wir.component.html',
  styleUrls: ['./wir.component.css']
})
export class WirComponent implements OnInit {
  displayText = this.service.wirTxt;
  constructor(private service: FirestoreService) { }

  ngOnInit() {
  }

}
