import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';
import { ApiPaisesService } from '../../servicios/api-paises.service';


@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.scss']
})
export class PeliculasListadoComponent implements OnInit {


  listaPaises:any;
  listaElementos: any;
  elementoDetalle: any;

  paisSeleccionado:any;
 


  constructor(private dbService: DatabaseService,private api:ApiPaisesService) { 
    this.api.obtenerListadoParametro('https://restcountries.eu/rest/v2/region/europe').subscribe((data:any) => {
      this.listaPaises= data;      
    });
    
  }

  ngOnInit(): void {
    
  }

  agarrarPais(pais:any){
    this.paisSeleccionado=pais.name;
  }



  

}
