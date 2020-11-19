import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';


@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  titulo:any;
  anio:any;
  genero;
  actor:any;
  correcto:boolean = false;
 
  listaActores:any;
  


  constructor(private dbService: DatabaseService,) { 
    this.dbService.traerColeccion('actores').subscribe(datos => this.listaActores=datos)
    
  }

  ngOnInit(): void {

  }

  crearPelicula() {
    if(this.titulo != null && this.anio != null && this.genero != null && this.actor) {
      this.dbService.agregarElemento('peliculas',this.titulo,{titulo:this.titulo,genero:this.genero,año:this.anio,actor:this.actor,activo:true, nombreDoc: this.titulo})
      this.reset();
      this.correcto=true;
      setTimeout(() => {
        this.correcto=false;
      }, 2000);
    }
  }

  reset(){
    this.titulo='';
    this.genero='';
    this.anio='';
    this.actor='';
  }

  agarrarActor(actor:any){
    this.actor=actor.nombre + ' ' + actor.apellido;
  }


}
