import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage'
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  uploadProgress: Observable<number>;
  randomId: string;
  public paths: string[];
  constructor(private afStorage: AngularFireStorage) { this.paths = []; }

  upload(event) {
    // create a random id
    this.randomId = Math.random().toString(36).substring(2);
    // create a reference to the storage bucket location
    const ref = this.afStorage.ref(this.randomId);
    this.paths.push(this.randomId);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    const task = ref.put(event.target.files[0]);
    this.uploadProgress = task.snapshotChanges()
      .pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));
  }
}
