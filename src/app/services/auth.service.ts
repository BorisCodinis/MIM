import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from  "@angular/fire/auth";
import { auth, User} from 'firebase';
import { Observable} from "rxjs";

import { firebase } from '@firebase/app';

import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

  @Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  constructor(private authService: AngularFireAuth, private af: AngularFire) {
    this.authService.authState.subscribe(auth =>{
      if (auth)
        localStorage.setItem('user', 'authorized');

    });
  }

  async googleLogin(){
    this.authService.auth
  }

  async logout(){
  }

  get isLoggedIn(): boolean {
    if (this.user$)
      return true;
    else
      return false;

  }

    emailLogin(email: string, password: string) {
      return this.authService.auth
        .signInWithEmailAndPassword(email, password);

    }
}
