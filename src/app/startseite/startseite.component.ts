import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {$} from 'protractor';


@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})


export class StartseiteComponent implements OnInit {
  title = 'Mensch Im Mittelpunkt';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

}
