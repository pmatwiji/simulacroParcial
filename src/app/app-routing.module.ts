import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './componentes/peliculas-listado/peliculas-listado.component';


const routes: Routes = [
  {path: '', redirectTo: '/busqueda', pathMatch: 'full'},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'peliculas/alta', component: PeliculaAltaComponent},
  {path: 'actor/alta', component: ActorAltaComponent},
  {path: 'actor/listado', component: ActorListadoComponent},
  {path: 'peliculas/listado', component: PeliculasListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
