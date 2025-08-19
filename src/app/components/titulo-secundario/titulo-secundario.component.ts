import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-secundario',
  templateUrl: './titulo-secundario.component.html',
  styleUrls: ['./titulo-secundario.component.css']
})
export class TituloSecundarioComponent {
  @Input() text: string = 'Botón';     // Texto que viene del padre
  @Input() color: string = 'blue';     // Color que viene del padre
  @Input() tamanio: string = '20';
}
