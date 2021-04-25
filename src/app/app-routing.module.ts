import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { HomeComponent } from './componentes/home/home.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';

const routes: Routes = [
  {path : '', component : BienvenidoComponent},
  {path : 'home', component : HomeComponent},
  {path : 'altaActores', component : AltaActoresComponent},
  {path : 'tabla', component : TablaPaisesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
