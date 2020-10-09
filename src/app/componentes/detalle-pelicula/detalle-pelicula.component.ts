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

  apellido:any= '';
  nombre:string='';
  sexo:string='';
  fecha:string='';
  nacionalidad:any='';

  constructor(private router:Router,private dbService: DatabaseService) {

   }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.apellido = this.inputElementoDetalle.apellido;
    this.nombre = this.inputElementoDetalle.nombre;
    this.sexo = this.inputElementoDetalle.sexo;
    this.fecha = this.inputElementoDetalle.fechaNacimiento;
    this.nacionalidad = this.inputElementoDetalle.nacionalidad;
  }

  reset(){
    this.apellido = '';
    this.nombre = '';
    this.sexo = '';
    this.fecha = '';
    this.nacionalidad = '';
  }

  checkRoute(){
    return this.router.url
  }

  emitirBorrarPelicula(pelicula){
    this.borrarPelicula.emit(pelicula);
    this.reset();
  }

  borrar(coleccion:string,doc:string){
    this.dbService.borrarElemento(coleccion,doc);
  }

}
