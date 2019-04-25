import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  signOut(){
    this.authService.logout();
  }


}
