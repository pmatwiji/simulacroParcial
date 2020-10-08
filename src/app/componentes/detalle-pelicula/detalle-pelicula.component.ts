import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../servicios/database.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() inputElementoDetalle: any;
  @Input() borrado: number;

  @Output() borrarPelicula: EventEmitter<any> = new EventEmitter();

  id:any= '';
  nombre:string='';
  tipo:string='';
  fecha:string='';
  publico:any='';


  constructor(private router:Router,private dbService: DatabaseService) {

   }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.id = this.inputElementoDetalle.id;
    this.nombre = this.inputElementoDetalle.nombre;
    this.tipo = this.inputElementoDetalle.tipo;
    this.fecha = this.inputElementoDetalle.fechaEstreno;
    this.publico = this.inputElementoDetalle.cantidadPublico;
  }

  reset(){
    this.id = '';
    this.nombre = '';
    this.tipo = '';
    this.fecha = '';
    this.publico = '';
  }

  checkRoute(){
    return this.router.url
  }

  emitirBorrarPelicula(pelicula){
    this.borrarPelicula.emit(pelicula);
    this.reset();
  }

}
