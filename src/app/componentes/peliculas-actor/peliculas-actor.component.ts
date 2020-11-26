import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-peliculas-actor',
  templateUrl: './peliculas-actor.component.html',
  styleUrls: ['./peliculas-actor.component.scss']
})
export class PeliculasActorComponent implements OnInit {

  
  @Input() inputListaPeliculas = [];


  constructor() { }

  ngOnInit(): void {
    
  }

  

}
