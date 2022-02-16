import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-criptomoneda-input',
  templateUrl: './criptomoneda-input.component.html',
  styleUrls: ['./criptomoneda-input.component.css']
})
export class CriptomonedaInputComponent implements OnInit {

  //se puede poner el nombre que quieras, pero al ser un evento se pone on
//Lo que voy a emitir es un strng (el término de búsqueda al pulsarenter)
@Output() onEnter : EventEmitter<string> = new EventEmitter();
//se puede poner el nombre que quieras, pero al ser un evento se pone on
//Lo que voy a emitir es un strng (el término de búsqueda cada vez que pulsas una tecla o cuando se deja de escribir)
@Output() onDebounce: EventEmitter<string> = new EventEmitter();
@Input() placeholder: string = '';
//Crear un Observable especial de forma manual
debouncer: Subject<string> = new Subject();
termino: string = '';
ngOnInit() { //inicializamos el debouncer (una sola vez)
this.debouncer


.pipe(debounceTime(300))//.pipe es para concatenar y debounceTime es como un setTimeOut
.subscribe( valor => {
  this.onDebounce.emit(valor);//envía el término
});
}
buscar() {
this.onEnter.emit( this.termino );//envías/emites el termino y lo recoges desde el selector
}
teclaPresionada() {//cada vez que se pulsa una tecla se llama al contenido de ngOnInit
this.debouncer.next( this.termino );
}

}
