import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})


export class StartseiteComponent implements OnInit {
  title = 'Mensch Im Mittelpunkt';

  constructor() { }

  ngOnInit() {
  }

}
