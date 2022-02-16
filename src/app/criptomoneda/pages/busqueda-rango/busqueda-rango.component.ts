import { Component, OnInit } from '@angular/core';
import { Criptomoneda } from '../../interfaces/criptomoneda.interface';
import { CriptomonedaService } from '../../services/criptomoneda.service';

@Component({
  selector: 'app-busqueda-rango',
  templateUrl: './busqueda-rango.component.html',
  styleUrls: ['./busqueda-rango.component.css']
})
export class BusquedaRangoComponent implements OnInit {

  hayError: boolean = false;
  criptomonedas: Criptomoneda[] = [];



  constructor(private CriptomonedaService: CriptomonedaService) { }

  ngOnInit(): void {
    this.buscarRango()

  }

  buscarRango() {


    this.hayError = false;
    this.CriptomonedaService.buscarCriptomonedaRango()
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

