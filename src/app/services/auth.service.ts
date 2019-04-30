import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

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
