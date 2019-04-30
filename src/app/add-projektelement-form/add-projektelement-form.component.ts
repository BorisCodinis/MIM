import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { FirestoreService } from '../services/firestore_service';
import { ToastrService } from 'ngx-toastr';
import { Projektelement } from '../models/Projektelement';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-projektelement-form',
  templateUrl: './add-projektelement-form.component.html',
  styleUrls: ['./add-projektelement-form.component.css']
})
export class AddProjektelementFormComponent implements OnInit {
  public element = new Projektelement();
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

      []
    ]
  };

  constructor(private service: FirestoreService, private toastr: ToastrService, private afStorage: StorageService) {
    this.element.id = '';
    this.element.titel = '';
    this.element.subtitel = '';
    this.element.inhalt = '';
    this.element.paths = [];
  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      editor2: new FormControl(null)
    });
  }

  public upload(event) {
    this.afStorage.projektImageUpload(event);
    this.element.paths = this.afStorage.projektPaths;
    console.log(this.element.paths);
  }

  onSubmit() {
    if (this.element.titel !== '' && this.element.subtitel !== '' && this.element.inhalt !== '') {
      this.service.postProjektelement(this.element);
      this.element.id = '';
      this.element.titel = '';
      this.element.subtitel = '';
      this.element.inhalt = '';
      this.element.paths = [];
      this.afStorage.projektPaths = [];
      this.toastr.success('Aktion erfolgreich', 'Chronikelement hinzugefügt!');
    } else {
      this.toastr.error('Aktion fehlgeschlagen', 'Jedes Feld ausfüllen!');
    }

  }

}
