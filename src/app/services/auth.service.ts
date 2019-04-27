import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { User} from 'firebase';
import { from, Observable} from 'rxjs';
import { firebase } from '@firebase/app';

import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }
  public async logout() {
    this.afAuth.auth.signOut();
  }

  get isLoggedIn(): boolean {
   return this.authState !== null;

  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password);

  }
}
