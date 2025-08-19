import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagina-servicios';
  onScroll(event: Event) {
  const container = event.target as HTMLElement;
  const slides = container.querySelectorAll('.slide');
  const containerHeight = container.clientHeight;

  slides.forEach(slide => {
    const slideTop = slide.getBoundingClientRect().top - container.getBoundingClientRect().top;

    // Busca animaciones de izquierda y derecha
    const animItems = slide.querySelectorAll('.animate-left, .animate-right,.animate-uno,.animate-dos,.animate-tres,.animate-cuatro');

    if (slideTop < containerHeight / 1.5) {
      animItems.forEach(item => item.classList.add('active'));
    } else {
      animItems.forEach(item => item.classList.remove('active'));
    }
  });
}

}
