import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';



const routes: Routes = [
  {path: '', redirectTo: '/actor/listado', pathMatch: 'full'},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'actor/alta', component: AltaActorComponent},
  {path: 'actor/listado', component: ActorListadoComponent},
  {path: 'peliculas/alta', component: PeliculaAltaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
