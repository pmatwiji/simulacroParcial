import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.scss']
})
export class PeliculasListadoComponent implements OnInit {

  elementos:Observable<any[]>;

  listaElementos: any;
  elementoDetalle: any;
 


  constructor(private dbService: DatabaseService, private firestore: AngularFirestore) { 
    
  }

  ngOnInit(): void {
    this.traerListaActualizada();
  }

  traerListaActualizada(){
      this.elementos = this.dbService.traerColeccion('peliculas');
      this.elementos.subscribe(elementos => this.listaElementos = elementos,error => console.log(error));
  }

  traerDetalle(elemento){
    this.elementoDetalle = elemento;
  }

  agarrarBorrarPelicula(pelicula:any){
    this.dbService.borrarElemento('peliculas',pelicula.nombre);
  }

  

}
