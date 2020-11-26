import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './componentes/peliculas-listado/peliculas-listado.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { BorrarPeliculaComponent } from './componentes/borrar-pelicula/borrar-pelicula.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component';
import { BorrarActorComponent } from './componentes/borrar-actor/borrar-actor.component';
import { ModificarActorComponent } from './componentes/modificar-actor/modificar-actor.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { PeliculasActorComponent } from './componentes/peliculas-actor/peliculas-actor.component';
import { PaisActorComponent } from './componentes/pais-actor/pais-actor.component';
import { PaisPeliculaComponent } from './componentes/pais-pelicula/pais-pelicula.component';
import { PeliculasPaisComponent } from './componentes/peliculas-pais/peliculas-pais.component';
import { DetallesPaisComponent } from './componentes/detalles-pais/detalles-pais.component';
import { ActoresPaisComponent } from './componentes/actores-pais/actores-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculasListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaActorComponent,
    BorrarPeliculaComponent,
    TablaPaisesComponent,
    AltaActorComponent,
    DetalleActorComponent,
    BorrarActorComponent,
    ModificarActorComponent,
    ActorPeliculaComponent,
    PeliculasActorComponent,
    PaisActorComponent,
    PaisPeliculaComponent,
    PeliculasPaisComponent,
    DetallesPaisComponent,
    ActoresPaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
