import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalles-pais',
  templateUrl: './detalles-pais.component.html',
  styleUrls: ['./detalles-pais.component.scss']
})
export class DetallesPaisComponent implements OnInit {

  @Input() inputPaisSeleccionado;

  constructor() { }

  ngOnInit(): void {
  }

}
