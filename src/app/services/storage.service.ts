import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  cardUploadProgress: Observable<number>;
  projektUploadProgress: Observable<number>;
  randomId: string;
  public paths: string[];
  public projektPaths: string[];
  constructor(private afStorage: AngularFireStorage) { this.paths = []; this.projektPaths = []; }

  cardImgUpload(event) {
    this.randomId = 'startseite/' + Math.random().toString(36).substring(2);
    const ref = this.afStorage.ref(this.randomId);
    this.paths.push(this.randomId);
    const task = ref.put(event.target.files[0]);
    this.cardUploadProgress = task.snapshotChanges()
      .pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));
  }

  projektImageUpload(event) {
    this.randomId = 'projekte/' + Math.random().toString(36).substring(2);
    const ref = this.afStorage.ref(this.randomId);
    this.projektPaths.push(this.randomId);
    const task = ref.put(event.target.files[0]);
    this.projektUploadProgress = task.snapshotChanges()
      .pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));
  }
}
