import { Component, OnInit } from '@angular/core';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  listaPaises : any[];
  constructor(private paisService : ServicioPaisesService) {
  }

  ngOnInit(): void {
    this.paisService.getAllPaises().subscribe(resp =>{
      this.listaPaises = resp;    
     });
  }



}
