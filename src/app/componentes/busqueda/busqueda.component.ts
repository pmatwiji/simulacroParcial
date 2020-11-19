import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

 


  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    
  }

  



}
