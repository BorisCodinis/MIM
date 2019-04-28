import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore_service';
import { TexteditorComponent } from "../texteditor/texteditor.component";
import {element} from 'protractor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public editor: TexteditorComponent;
  constructor() {
  }

  ngOnInit() {
  }

}
