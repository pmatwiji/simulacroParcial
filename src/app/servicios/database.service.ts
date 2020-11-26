import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  traerColeccion(coleccion:string){
      return this.db.collection(coleccion, ref => ref.where('activo','==',true)).valueChanges();
  }

  traerListaPeliculasDeActor(actor:string){
    return this.db.collection('peliculas', ref => ref.where('actor','==',actor)).valueChanges();
}

traerListaPeliculasDePais(pais:string){
  return this.db.collection('peliculas', ref => ref.where('paisOrigen','==',pais)).valueChanges();
}

traerListaActoresDePais(pais:string){
  return this.db.collection('actores', ref => ref.where('nacionalidad','==',pais)).valueChanges();
}

  agregarElemento(coleccion:string,documento:string,data:any){
    let ref = this.db.collection(coleccion);
    ref.doc(documento).set(data);
  }

  borrarElemento(coleccion,documento){
      this.db.collection(coleccion).doc(documento).update({activo: false})
  }

  modificarElemento(coleccion,documento,nombre,apellido,sexo,fechaNacimiento,nacionalidad){
    this.db.collection(coleccion).doc(documento).update({nombre: nombre,apellido: apellido, sexo:sexo,fechaNacimiento:fechaNacimiento,nacionalidad:nacionalidad,nombreDoc: documento})
  }

  traerPeliculasDeActor(coleccion:string,actor){
    return this.db.collection(coleccion, ref => ref.where('actor','==',actor)).valueChanges();
}
  
}
