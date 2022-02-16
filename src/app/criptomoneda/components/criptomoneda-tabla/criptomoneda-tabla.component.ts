import { Component, Input, OnInit } from '@angular/core';
import { Criptomoneda } from '../../interfaces/criptomoneda.interface';

@Component({
  selector: 'app-criptomoneda-tabla',
  templateUrl: './criptomoneda-tabla.component.html',
  styleUrls: ['./criptomoneda-tabla.component.css']
})
export class CriptomonedaTablaComponent implements OnInit {


  @Input() criptomonedas: Criptomoneda[] =[];
  constructor() { }
  ngOnInit(): void {
  }

}
