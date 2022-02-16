import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriptomonedaInputComponent } from './components/criptomoneda-input/criptomoneda-input.component';
import { CriptomonedaTablaComponent } from './components/criptomoneda-tabla/criptomoneda-tabla.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { VercriptomonedaComponent } from './pages/vercriptomoneda/vercriptomoneda.component';
import { BusquedaRangoComponent } from './pages/busqueda-rango/busqueda-rango.component';




@NgModule({
  declarations: [
  
    CriptomonedaInputComponent,
    CriptomonedaTablaComponent,
    PrincipalComponent,
    VercriptomonedaComponent,
    BusquedaRangoComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [

    VercriptomonedaComponent,
    PrincipalComponent,
    BusquedaRangoComponent
  ]
})
export class CriptomonedaModule { }
