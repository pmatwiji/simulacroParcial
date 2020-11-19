import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  @Input() listaPaises: any;
  @Output() paisEmitido: EventEmitter<any> = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }

  emitirPais(pais) {
    this.paisEmitido.emit(pais);
  }

}
