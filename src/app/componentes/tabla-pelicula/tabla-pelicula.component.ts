import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() coleccionPeliculas: any [];
  @Output() detallesEvent = new EventEmitter<any>();
  @Output() borrarEvent = new EventEmitter<any>();
  @Output() modificarEvent = new EventEmitter<any>();



  peliculas: any;
  vistaTabla:boolean = true;
  wait:boolean = false;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.wait=true;
    }, 1000);
  }

  cambiarVista(){
    this.vistaTabla=!this.vistaTabla;
  }

  verDetallesPelicula(pelicula){
    this.detallesEvent.emit(pelicula);
  }

  verBorrarPelicula(pelicula){
    this.borrarEvent.emit(pelicula);
  }

  verModificarPelicula(pelicula){
    this.modificarEvent.emit(pelicula);
  }



  checkRoute(){
    return this.router.url
  }

}
