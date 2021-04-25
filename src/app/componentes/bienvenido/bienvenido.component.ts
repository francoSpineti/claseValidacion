import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  public formGroup : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      'nombre' : ['',[Validators.required,this.spacesValidator]],
      'apellido' : ['',Validators.required],
      'edad' : ['',[Validators.required, Validators.min(18),Validators.max(99)]],
      'sexo' : ['',Validators.required],
      'email' : ['',[Validators.required,Validators.email]],
      'terminos' : ['',Validators.required],
    });
  }

  public aceptar(){
    console.log(this.formGroup.getRawValue()); // devuelve el formgroup en json
    console.log(this.formGroup.get('nombre').value);
    console.log(this.formGroup.controls['nombre'].value); // lo mismo que linea 29
  }

  private spacesValidator(control : AbstractControl) : null | object{
    const nombre = <string>control.value;
    const espacios = nombre.includes(' ');
    return espacios == true? {contieneEspacios : true} : null;
/*     if(espacios){
      return{
        contieneEspacios : true
      };
    }else{
      return null;
    } */
  }

}
