import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Chronikelement } from '../models/Chronikelement';
import { ToastrService } from "ngx-toastr";
import * as Quill from 'quill';
import { QuillModule } from 'ngx-quill'
import {FirestoreService} from "../services/firestore_service";

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.css']
})
export class TexteditorComponent implements OnInit {
  editorForm: FormGroup;
  public element = new Chronikelement();

  constructor(private service: FirestoreService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    });
  }


  onSubmit() {
    if (this.element.titel !== '' && this.element.subtitel !== '' && this.element.inhalt !== '') {
      console.log(this.element.titel, this.element.subtitel, this.element.inhalt);
      this.service.postChronikelement(this.element);
      this.element.titel = '';
      this.element.subtitel = '';
      this.element.inhalt = '';
      this.toastr.success('Aktion erfolgreich', 'Chronikelement hinzugefügt!');
    } else {
      this.toastr.error('Aktion fehlgeschlagen', 'Jedes Feld ausfüllen!')
    }
  }

}
