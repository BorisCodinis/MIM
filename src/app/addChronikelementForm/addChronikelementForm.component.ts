import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Chronikelement } from '../models/Chronikelement';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../services/storage.service';
import {FirestoreService} from '../services/firestore_service';

@Component({
  selector: 'app-addChronikelementForm',
  templateUrl: './addChronikelementForm.component.html',
  styleUrls: ['./addChronikelementForm.component.css']
})
export class AddChronikelementFormComponent implements OnInit {
  editorForm: FormGroup;
  editorStyle = {
    height: '200px'
  };

  config = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [],

      [{ header: 1 }, { header: 2 }],               // custom button values
      [{ list: 'ordered'}],
      [{ script: 'sub'}, { script: 'super' }],      // superscript/subscript
      [],          // outdent/indent
      [],                         // text direction

      [],  // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }],          // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['link']
    ]
  };

  public element = new Chronikelement();


  constructor(private service: FirestoreService, private toastr: ToastrService, private afStorage: StorageService) {
    this.element.id = '';
    this.element.titel = '';
    this.element.subtitel = '';
    this.element.inhalt = '';
    this.element.paths = [];
  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      editor: new FormControl(null)
    });

  }


  public upload(event) {
    this.afStorage.cardImgUpload(event);
    this.element.paths = this.afStorage.paths;
    console.log(this.element.paths);
  }

  onSubmit() {
    if (this.element.titel !== '' && this.element.subtitel !== '' && this.element.inhalt !== '') {
      this.service.postChronikelement(this.element);
      this.element.id = '';
      this.element.titel = '';
      this.element.subtitel = '';
      this.element.inhalt = '';
      this.element.paths = [];
      this.afStorage.paths = [];
      this.toastr.success('Aktion erfolgreich', 'Chronikelement hinzugefügt!');
    } else {
      this.toastr.error('Aktion fehlgeschlagen', 'Jedes Feld ausfüllen!');
    }
  }

}
