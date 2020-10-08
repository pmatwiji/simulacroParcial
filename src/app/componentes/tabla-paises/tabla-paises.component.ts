import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiPaisesService } from '../../servicios/api-paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  listaPaises: any;
  @Output() paisEmitido: EventEmitter<any> = new EventEmitter();

  constructor(private api:ApiPaisesService) {
    this.api.obtenerListadoParametro('https://restcountries.eu/rest/v2/region/europe').subscribe((data:any) => {
      this.listaPaises= data;      
    });
   }

  ngOnInit(): void {
  }

  emitirPais(pais) {
    this.paisEmitido.emit(pais);
  }

}
