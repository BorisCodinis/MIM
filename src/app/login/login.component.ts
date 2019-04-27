import {Component, ElementRef, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import {$} from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  email = '';
  pw = '';

  constructor(private authService: AuthService) {
    console.log(document.getElementById('loginDialog'));
  }

  ngOnInit() {
  }

  login(email: string, pw: string) {
    this.authService.emailLogin(email, pw);
  }

  signOut() {
    this.authService.logout();
  }


}
