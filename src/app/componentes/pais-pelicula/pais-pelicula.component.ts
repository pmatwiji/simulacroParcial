import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';
import { ApiPaisesService } from '../../servicios/api-paises.service';

@Component({
  selector: 'app-pais-pelicula',
  templateUrl: './pais-pelicula.component.html',
  styleUrls: ['./pais-pelicula.component.scss']
})
export class PaisPeliculaComponent implements OnInit {

  listaPaises;
  listaPeliculas;
  listaActores;
  opcion;
  paisSeleccionado;

  constructor(private dbService: DatabaseService,private api:ApiPaisesService) { 
    this.api.obtenerListadoParametro('https://restcountries.eu/rest/v2/region/europe').subscribe((data:any) => {
      this.listaPaises= data;      
    });
  }

  ngOnInit(): void {
  }

  seleccionarPais(pais){
    this.paisSeleccionado= pais;
  }

  seleccionarListaPeliculas(pais){
    this.dbService.traerListaPeliculasDePais(pais.name).subscribe((data:any) => {
      this.listaPeliculas = data;
    })
  }

  seleccionarListaActores(pais){
    this.dbService.traerListaActoresDePais(pais.name).subscribe((data:any) => {
      this.listaActores = data;
    })
  }

}
