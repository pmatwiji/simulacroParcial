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
    this.apellido = this.inputElementoBorrar.apellido;
    this.nombre = this.inputElementoBorrar.nombre;
    this.sexo = this.inputElementoBorrar.sexo;
    this.fecha = this.inputElementoBorrar.fechaNacimiento;
    this.nacionalidad = this.inputElementoBorrar.nacionalidad;
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

  borrar(coleccion:string,doc:string){
    this.dbService.borrarElemento(coleccion,doc);
  }

  
}
