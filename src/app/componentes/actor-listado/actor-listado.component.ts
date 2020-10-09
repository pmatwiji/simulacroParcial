import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  elementosActor:Observable<any[]>;
  listaActores: any;
  elementoDetalle: any;
  elementoBorrar: any;

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.traerListaActualizada();
  }

  traerListaActualizada(){
    this.elementosActor = this.dbService.traerColeccion('actores');
    this.elementosActor.subscribe(elementos => this.listaActores = elementos,error => console.log(error));
  }

  traerDetalle(elemento){
    this.elementoDetalle = elemento;
  }

  traerBorrar(elemento){
    this.elementoBorrar = elemento;
  }
}
