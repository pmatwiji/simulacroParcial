import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  @Input() coleccionActores: any [];
  @Output() detallesEvent = new EventEmitter<any>();
  @Output() borrarEvent = new EventEmitter<any>();

  @Output() modificarEvent = new EventEmitter<any>();
''

  constructor(private router:Router) { }

  ngOnInit(): void {

  }


  verDetallesActor(actor){
    this.detallesEvent.emit(actor);
  }

  verBorrarActor(actor){
    this.borrarEvent.emit(actor);
  }

  verModificarActor(actor){
    this.modificarEvent.emit(actor);
  }


}
