import {Component,  OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  email = '';
  pw = '';

  constructor(private authService: AuthService) {
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
