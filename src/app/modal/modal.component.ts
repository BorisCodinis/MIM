import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore_service';
import { Chronikelement } from '../models/Chronikelement';
import {element} from 'protractor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public element = new Chronikelement();
  constructor(private service: FirestoreService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.element.titel !== '' && this.element.subtitel !== '' && this.element.inhalt !== '') {
      console.log(this.element.titel, this.element.subtitel, this.element.inhalt);
      this.service.postChronikelement(this.element)
      this.element.titel = '';
      this.element.subtitel = '';
      this.element.inhalt = '';
    }
  }

}
