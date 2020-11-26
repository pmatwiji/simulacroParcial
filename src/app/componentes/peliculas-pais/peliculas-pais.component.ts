import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas-pais',
  templateUrl: './peliculas-pais.component.html',
  styleUrls: ['./peliculas-pais.component.scss']
})
export class PeliculasPaisComponent implements OnInit {

  @Input() inputListaPeliculas = [];

  constructor() { }

  ngOnInit(): void {
  }

}
