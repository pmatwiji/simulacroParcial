import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';
import { ApiPaisesService } from '../../servicios/api-paises.service';


@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss']
})
export class AltaActorComponent implements OnInit {

  nombre:any;
  apellido:any;
  sexo = null;
  fechaNacimiento:any;
  nacionalidad:any;
  correcto:boolean = false;
 
  listaPaises:any;
  


  constructor(private dbService: DatabaseService,private api:ApiPaisesService) { 
    this.api.obtenerListadoParametro('https://restcountries.eu/rest/v2/region/europe').subscribe((data:any) => {
      this.listaPaises= data;      
    });
    
  }

  ngOnInit(): void {

  }

  crearActor() {
    if(this.nombre != null && this.apellido != null && this.sexo != null && this.fechaNacimiento != null && this.nacionalidad != null) {
      this.dbService.agregarElemento('actores',this.nombre + ' ' + this.apellido,{apellido:this.apellido,nombre:this.nombre,fechaNacimiento:this.fechaNacimiento,sexo:this.sexo,activo:true,nacionalidad:this.nacionalidad,foto:'https://censur.es/wp-content/uploads/2019/03/default-avatar.png', nombreDoc: this.nombre + ' ' + this.apellido})
      this.reset();
      this.correcto=true;
      setTimeout(() => {
        this.correcto=false;
      }, 2000);
    }
  }

  reset(){
    this.nombre='';
    this.apellido='';
    this.sexo='';
    this.fechaNacimiento='';
    this.nacionalidad='';
  }

  agarrarPais(pais:any){
    this.nacionalidad=pais.name;
  }

}
