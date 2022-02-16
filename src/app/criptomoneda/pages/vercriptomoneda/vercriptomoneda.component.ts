import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Criptomoneda } from '../../interfaces/criptomoneda.interface';
import { CriptomonedaService } from '../../services/criptomoneda.service';

@Component({
  selector: 'app-vercriptomoneda',
  templateUrl: './vercriptomoneda.component.html',
  styleUrls: ['./vercriptomoneda.component.css']
})
export class VercriptomonedaComponent implements OnInit {

  criptomoneda!: Criptomoneda;//con ! nos deja crear la variable sin tener que inicializarla
  constructor(
    private activatedRoute: ActivatedRoute,
    private criptomonedaService: CriptomonedaService
  ) { }
  ngOnInit(): void {



    this.activatedRoute.params
      .pipe(
        //({id}) es una destructuracion cogiendo solo el id de params, es lo mismo que si pusieramos (params.id)
        //switchMap recibe un Observable y lo devuelve
        switchMap(({ id }) => this.criptomonedaService.getCriptomonedaPorAlpha(id)),//switchMap( (param) => this.paisService.getPaisPorAlpha( param.id ) ),
        tap(console.log)//es lo mismo que poner

      )
      .subscribe(criptomoneda => {
        console.log("AAAAAAAAAAAAAAAAAAAA"+criptomoneda);
        this.criptomoneda = criptomoneda[0];
        console.log("Mi criptomoneda", this.criptomoneda)
      });//pais es el id, porque es el params que hemos definido en el app-routing
    /*
    this.activatedRoute.params
    .subscribe(({id})=>{console.log(id)});
    this.paisService.getPAisPorAlpha(id)
    .subscribe(pais=>{console.log(pais)});
    });
    */
  }
}


