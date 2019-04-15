import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronikelement',
  templateUrl: './chronikelement.component.html',
  styleUrls: ['./chronikelement.component.css']
})
export class ChronikelementComponent implements OnInit {
 titel = 'Lurem';
 subtitle = 'Pipsum';
 cardtext = 'Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum'
  constructor() { }

  ngOnInit() {
  }

}
