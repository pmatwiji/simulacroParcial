import { Component, OnInit, Input, Output, EventEmitter ,OnChanges } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';
import { ApiPaisesService } from '../../servicios/api-paises.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {

  


  listaActores: any;
  listaPaises;
  listaPeliculas;
  actorSeleccionado;
  paisSeleccionado;
  peliculasSeleccionadas;
  opcion;


  constructor(private dbService: DatabaseService,private api:ApiPaisesService) {
    this.api.obtenerListadoParametro('https://restcountries.eu/rest/v2/region/europe').subscribe((data:any) => {
      this.listaPaises= data;      
    });
    
   }

  ngOnInit(): void {
    this.traerListaActualizada();
  }

  ngOnChanges(): void {
    
  }

  

  traerListaActualizada(){
    this.dbService.traerColeccion('actores').subscribe(datos => this.listaActores = datos);
  }

  seleccionarActor(actor){
    this.actorSeleccionado= actor;
  }

  seleccionarPeliculas(actor){
    this.dbService.traerListaPeliculasDeActor(actor.nombre + ' ' + actor.apellido).subscribe((data:any) => {
      this.listaPeliculas = data;
    })
  }

  seleccionarPais(nombrePais){
    for (const pais of this.listaPaises) {
      if(pais.name == nombrePais){
        this.paisSeleccionado= pais;
      }
    }
  }

  
}
