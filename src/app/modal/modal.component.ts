import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "../services/firestore_service";
import { Chronikelement } from "../models/Chronikelement";
import {element} from "protractor";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  element: Chronikelement;



  constructor(private service: FirestoreService) {


  }

  ngOnInit() {
  }

}
