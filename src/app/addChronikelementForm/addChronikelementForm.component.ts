import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Chronikelement } from '../models/Chronikelement';
import { ToastrService } from "ngx-toastr";
import { StorageService } from "../services/storage.service";
import * as Quill from 'quill';
import { QuillModule } from 'ngx-quill'
import {FirestoreService} from "../services/firestore_service";

@Component({
  selector: 'app-addChronikelementForm',
  templateUrl: './addChronikelementForm.component.html',
  styleUrls: ['./addChronikelementForm.component.css']
})
export class AddChronikelementFormComponent implements OnInit {
  editorForm: FormGroup;
  public element = new Chronikelement();

  constructor(private service: FirestoreService, private toastr: ToastrService, private afStorage: StorageService) {

  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    });
  }


  public upload(event) {
    this.afStorage.upload(event);
    this.element.paths = this.afStorage.paths;
    console.log(this.element.paths)
  }

  onSubmit() {
    if (this.element.titel !== '' && this.element.subtitel !== '' && this.element.inhalt !== '') {
      console.log(this.element.titel, this.element.subtitel, this.element.inhalt, this.element.paths);
      this.service.postChronikelement(this.element);
      this.element.titel = '';
      this.element.subtitel = '';
      this.element.inhalt = '';
      this.afStorage.paths = [];
      this.toastr.success('Aktion erfolgreich', 'Chronikelement hinzugefügt!');
    } else {
      this.toastr.error('Aktion fehlgeschlagen', 'Jedes Feld ausfüllen!')
    }
  }

}
