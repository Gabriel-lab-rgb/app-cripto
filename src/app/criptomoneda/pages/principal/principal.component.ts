import { Component, OnInit } from '@angular/core';
import { Criptomoneda } from '../../interfaces/criptomoneda.interface';
import { CriptomonedaService } from '../../services/criptomoneda.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  hayError: boolean = false;
  criptomonedas: Criptomoneda[] = [];
  termino: string = '';

  constructor(private CriptomonedaService: CriptomonedaService) { }

  ngOnInit(): void {

  }
  teclaPresionada() {

  }


  buscar(termino: string) {

    if (termino == "") {

      this.hayError = true; this.criptomonedas = [];

    } else {
      let listaCriptos = termino.split(' ');
      console.log(listaCriptos)
      let cadena = "";
      for (let i = 0; i < listaCriptos.length; i++) {
        cadena = cadena + listaCriptos[i] +",";
      }
      console.log(cadena);
      let cadena2=cadena.substring(0,cadena.length-1);
      this.hayError = false;
    
      this.CriptomonedaService.buscarCriptomoneda(cadena2.toLocaleUpperCase())
        .subscribe({
          next: (resp) => {
            console.log("HOLA" + resp);

            this.criptomonedas = resp;
          },
          error: (err) => {
            this.hayError = true; this.criptomonedas = [];
            console.log("ERROR" + err);
          }
        });

    }


  }
}







