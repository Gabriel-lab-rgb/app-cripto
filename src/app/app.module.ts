import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SharedModule } from './criptomoneda/shared/shared.module';
import { CriptomonedaModule } from './criptomoneda/criptomoneda.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CriptomonedaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
