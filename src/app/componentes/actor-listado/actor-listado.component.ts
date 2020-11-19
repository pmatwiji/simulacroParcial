import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';


@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  



  listaActores: any;
  actorSeleccionado;
  opcion;


  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.traerListaActualizada();
  }

  traerListaActualizada(){
    this.dbService.traerColeccion('actores').subscribe(datos => this.listaActores = datos);
  }

  seleccionarActor(actor){
    this.actorSeleccionado= actor;
  }

  accion(opcion,actor){
    switch (opcion) {
      case 'borrar':
        this.dbService.borrarElemento('actores',actor.nombreDoc)
      break;
    
      default:
        break;
    }
  }

  // traerDetalle(elemento){
  //   this.elementoDetalle = elemento;
  // }

  // traerBorrar(elemento){
  //   this.elementoBorrar = elemento;
  // }

  // verDetallesActor(actor){
  //   this.detallesEvent.emit(actor);
  // }

  // verBorrarActor(actor){
  //   this.borrarEvent.emit(actor);
  // }

  // verModificarActor(actor){
  //   this.modificarEvent.emit(actor);
  // }
}
