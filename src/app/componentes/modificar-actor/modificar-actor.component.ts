import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';

@Component({
  selector: 'app-modificar-actor',
  templateUrl: './modificar-actor.component.html',
  styleUrls: ['./modificar-actor.component.scss']
})
export class ModificarActorComponent implements OnInit {

  @Input() inputActorSeleccionado;
  @Output() mandarModificarEvent = new EventEmitter<string>()
  modificar:boolean = false;

  nombre;
  apellido;
  sexo;
  fechaNacimiento;
  nacionalidad;

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
  }

  mandarModificar(value){
    this.mandarModificarEvent.emit(value);
  }

  cambiarModo(){
    this.modificar = !this.modificar;
  }

  llenarForm(){
    this.nombre = this.inputActorSeleccionado.nombre;
    this.apellido = this.inputActorSeleccionado.apellido;
    this.sexo = this.inputActorSeleccionado.sexo;
    this.fechaNacimiento = this.inputActorSeleccionado.fechaNacimiento;
    this.nacionalidad = this.inputActorSeleccionado.nacionalidad;
  }

  modificarActor(){
    this.dbService.modificarElemento('actores',this.inputActorSeleccionado.nombreDoc,this.nombre,this.apellido,this.sexo,this.fechaNacimiento,this.nacionalidad)

    this.inputActorSeleccionado.nombre =this.nombre;
    this.inputActorSeleccionado.apellido = this.apellido;
    this.inputActorSeleccionado.sexo = this.sexo;
    this.inputActorSeleccionado.fechaNacimiento = this.fechaNacimiento;
    this.inputActorSeleccionado.nacionalidad = this.nacionalidad ;
  }
}
