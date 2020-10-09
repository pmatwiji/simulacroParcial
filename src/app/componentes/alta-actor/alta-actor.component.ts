import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseService } from '../../servicios/database.service';


@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss']
})
export class AltaActorComponent implements OnInit {

  nombre:any;
  apellido:any;
  sexo:any= 'masculino';
  fechaNacimiento:any;
  @Input() nacionalidad:any;
  correcto:boolean = false;


  constructor(private db : AngularFireDatabase, private dbService:DatabaseService) { }

  ngOnInit(): void {

  }

  crearActor() {
    if(this.nombre != null && this.apellido != null && this.sexo != null && this.fechaNacimiento != null && this.nacionalidad != null) {
      this.dbService.agregarElemento('actores',this.nombre + ' ' + this.apellido,{apellido:this.apellido,nombre:this.nombre,fechaNacimiento:this.fechaNacimiento,sexo:this.sexo,activo:true,nacionalidad:this.nacionalidad,foto:'https://lh3.googleusercontent.com/proxy/OaeyXouE_W69vofJ7rOiXv4la6qyY0CvyWUUIplRnhnjO0RmXxslfwwmuFTR_6TcIQZY1_vU44Wtr8f9i2MVHAmB4lS_dy8qTjTAldI-TOA9HGvrF_VtZWR8Bu4'})
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

}
