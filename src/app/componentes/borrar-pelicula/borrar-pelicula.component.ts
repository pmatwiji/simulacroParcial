import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../servicios/database.service';

@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.scss']
})
export class BorrarPeliculaComponent implements OnInit {

  @Input() inputElementoBorrar: any;

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
    this.id = this.inputElementoBorrar.id;
    this.nombre = this.inputElementoBorrar.nombre;
    this.tipo = this.inputElementoBorrar.tipo;
    this.fecha = this.inputElementoBorrar.fechaEstreno;
    this.publico = this.inputElementoBorrar.cantidadPublico;
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

  borrar(coleccion:string,doc:string){
    this.dbService.borrarElemento(coleccion,doc);
  }

  
}
