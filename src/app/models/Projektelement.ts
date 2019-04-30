export class Projektelement {
  id: string;
  titel: string;
  subtitel: string;
  inhalt: string;
  paths: string[];
  ts: string;

  constructor() {
    this.id = '';
    this.titel = '';
    this.subtitel = '';
    this.inhalt = '';
    this.paths = [];
    this.ts = new Date().toLocaleTimeString();
  }

}

