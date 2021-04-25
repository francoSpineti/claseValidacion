import { Component, OnInit } from '@angular/core';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private paisService : ServicioPaisesService) { }

  ngOnInit(): void {
  }

  public traerDatos(){
    //console.log(this.paisService.getPaisActual());
    this.paisService.getAllPaises().subscribe(resultado =>{
      console.log(resultado);
    });
  }

}
