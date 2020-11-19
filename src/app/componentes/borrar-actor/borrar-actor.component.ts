import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-borrar-actor',
  templateUrl: './borrar-actor.component.html',
  styleUrls: ['./borrar-actor.component.scss']
})
export class BorrarActorComponent implements OnInit {

  @Input() inputActorSeleccionado;
  @Output() mandarBorrarEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  mandarBorrar(value){
    this.mandarBorrarEvent.emit(value);
  }

}
