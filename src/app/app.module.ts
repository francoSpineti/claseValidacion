import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { HomeComponent } from './componentes/home/home.component';
import { ServicioPaisesService } from './servicios/servicio-paises.service';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    HomeComponent,
    AltaActoresComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicioPaisesService], //inyectamos el servicio para poder usarlo en toda la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
