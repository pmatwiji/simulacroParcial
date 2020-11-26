import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actores-pais',
  templateUrl: './actores-pais.component.html',
  styleUrls: ['./actores-pais.component.scss']
})
export class ActoresPaisComponent implements OnInit {

  @Input() inputListaActores = [];

  constructor() { }

  ngOnInit(): void {
  }

}
