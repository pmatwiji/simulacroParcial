import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  elementos:Observable<any[]>;
  listaElementos: any;
  elementoDetalle: any;
  elementoBorrar: any;


  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.traerListaActualizada();
  }

  traerListaActualizada(){
    this.elementos = this.dbService.traerColeccion('peliculas');
    this.elementos.subscribe(elementos => this.listaElementos = elementos,error => console.log(error));
  }

  traerDetalle(elemento){
    this.elementoDetalle = elemento;
  }

  traerBorrar(elemento){
    this.elementoBorrar = elemento;
  }



}
