import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
  @Input() text: string = 'Botón';     // Texto que viene del padre
  @Input() color: string = 'blue';     // Color que viene del padre

  @Output() clicked = new EventEmitter<void>(); // Evento hacia el padre

  onClick() {
    this.clicked.emit(); // Dispara el evento cuando se hace click
  }
}
