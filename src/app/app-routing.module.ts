import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './criptomoneda/pages/principal/principal.component';
import { VercriptomonedaComponent } from './criptomoneda/pages/vercriptomoneda/vercriptomoneda.component';
import { BusquedaRangoComponent } from './criptomoneda/pages/busqueda-rango/busqueda-rango.component';



const routes: Routes = [

  {
    //es el primer componente, cuando ponemos la URL del proyecto ynada más
    path: '',
    component: PrincipalComponent,
    pathMatch: 'full'
  },

  {
    //es el primer componente, cuando ponemos la URL del proyecto ynada más
    path: 'criptomoneda/:id',
    component: VercriptomonedaComponent,

  },
  {
    //es el primer componente, cuando ponemos la URL del proyecto ynada más
    path: 'busqueda-rango',
    component: BusquedaRangoComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
