import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent {
  @Input() texto: string = 'Título por defecto';  // Texto que viene del padre
  @Input() color: string = 'black';               // Color que viene del padre
}
