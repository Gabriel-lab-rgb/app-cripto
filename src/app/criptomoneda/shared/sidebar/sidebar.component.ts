import { Component, OnInit } from '@angular/core';
import { CriptomonedaService } from '../../services/criptomoneda.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicio: CriptomonedaService) { }

  ngOnInit(): void {
  }

  get historial(){
    return this.servicio.historial;
  }

}
