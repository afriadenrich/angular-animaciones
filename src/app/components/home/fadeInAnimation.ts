import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export default trigger('fadeIn', [
  // Creamos la animación 'fadeIn'
  state('show', style({ opacity: 1 })), // Definimos el estado 'show' con opacidad 1
  state('hide', style({ opacity: 0 })), // Definimos el estado 'hide' con opacidad 0
  transition('hide => show', [animate('2s ease-in')]), // Transición de 'hide' a 'show' con duración de 2 segundos
  transition('show => hide', [animate('2s ease-out')]), // Transición de 'show' a 'hide' con duración de 2 segundos
]);
