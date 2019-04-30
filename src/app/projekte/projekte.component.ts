import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-projekte',
  templateUrl: './projekte.component.html',
  styleUrls: ['./projekte.component.css']
})
export class ProjekteComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
