import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  @Input() listaActores: any;
  @Output() ActorEmitido: EventEmitter<any> = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }

  emitirActor(actor) {
    this.ActorEmitido.emit(actor);
  }

 

}
