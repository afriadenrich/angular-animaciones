import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations'; // Importamos las funciones necesarias para animaciones
import { NgClass } from '@angular/common'; // Importamos NgClass y NgStyle para dinámicamente cambiar clases y estilos
import { Component, OnDestroy, OnInit } from '@angular/core'; // Importamos los módulos necesarios para Angular
import { RouterOutlet } from '@angular/router'; // Importamos el módulo para manejar rutas
import fadeInAnimation from './fadeInAnimation';

@Component({
  selector: 'app-home',
  standalone: true, // Indicamos que este componente es standalone
  imports: [RouterOutlet, NgClass], // Importamos RouterOutlet y NgClass
  templateUrl: './home.component.html', // Indicamos el archivo de template HTML
  styleUrls: ['./home.component.css'], // Indicamos el archivo de estilos CSS
  animations: [
    // Definimos las animaciones utilizadas en este componente
    fadeInAnimation,
    trigger('slideIn', [
      // Creamos la animación 'slideIn'
      state('show', style({ transform: 'translateX(0)' })), // Definimos el estado 'show' con transformación translateX(0)
      state('hide', style({ transform: 'translateX(-100%)' })), // Definimos el estado 'hide' con transformación translateX(-100%)
      transition('hide => show', [animate('0.5s ease-in')]), // Transición de 'hide' a 'show' con duración de 0.5 segundos
      transition('show => hide', [animate('0.5s ease-out')]), // Transición de 'show' a 'hide' con duración de 0.5 segundos
    ]),
    trigger('bounce', [
      // Creamos la animación 'bounce'
      state('normal', style({ transform: 'translateY(0)' })), // Definimos el estado 'normal' con transformación translateY(0)
      state('bounce', style({ transform: 'translateY(-100px)' })), // Definimos el estado 'bounce' con transformación translateY(-100px)
      transition('normal => bounce', [
        animate('0.5s ease-in-out', style({ transform: 'translateY(-300px)' })),
        animate('0.5s ease-in-out'),
      ]), // Transición de 'normal' a 'bounce' con varias animaciones
      transition('bounce => normal', [animate('0.5s ease-in-out')]), // Transición de 'bounce' a 'normal' con duración de 0.5 segundos
    ]),
    trigger('rotate', [
      // Creamos la animación 'rotate'
      state('normal', style({ transform: 'rotate(0deg)' })), // Definimos el estado 'normal' con rotación 0 grados
      state('rotate', style({ transform: 'rotate(360deg)' })), // Definimos el estado 'rotate' con rotación 360 grados
      transition('normal => rotate', [animate('1s ease-in-out')]), // Transición de 'normal' a 'rotate' con duración de 1 segundo
      transition('rotate => normal', [animate('1s ease-in-out')]), // Transición de 'rotate' a 'normal' con duración de 1 segundo
    ]),
    trigger('flip', [
      // Creamos la animación 'flip'
      state('normal', style({ transform: 'perspective(600px) rotateY(0deg)' })), // Definimos el estado 'normal' con rotación Y 0 grados
      state('flip', style({ transform: 'perspective(600px) rotateY(180deg)' })), // Definimos el estado 'flip' con rotación Y 180 grados
      transition('normal <=> flip', [animate('0.6s ease-in-out')]), // Transición entre 'normal' y 'flip' con duración de 0.6 segundos
    ]),
    trigger('carouselAnimation', [
      // Creamos la animación 'carouselAnimation'
      transition('void => *', [
        // Definimos la transición de 'void' a cualquier estado
        style({ opacity: 0, transform: 'scale(0.95)' }), // Estilo inicial de opacidad 0 y escala 0.95
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' })), // Animación a opacidad 1 y escala 1
      ]),
      transition('* => void', [
        // Definimos la transición de cualquier estado a 'void'
        animate(
          '500ms ease-in',
          style({ opacity: 0, transform: 'scale(0.95)' })
        ), // Animación a opacidad 0 y escala 0.95
      ]),
    ]),
    trigger('collapse', [
      // Creamos la animación 'collapse'
      state('expanded', style({ height: '*', opacity: 1 })), // Definimos el estado 'expanded' con altura automática y opacidad 1
      state('collapsed', style({ height: '0', opacity: 0 })), // Definimos el estado 'collapsed' con altura 0 y opacidad 0
      transition('expanded <=> collapsed', [animate('0.5s ease-in-out')]), // Transición entre 'expanded' y 'collapsed' con duración de 0.5 segundos
    ]),
    trigger('flash', [
      // Creamos la animación 'flash'
      state('normal', style({ opacity: 1 })), // Definimos el estado 'normal' con opacidad 1
      state('flash', style({ opacity: 0 })), // Definimos el estado 'flash' con opacidad 0
      transition('normal <=> flash', [animate('0.5s ease-in-out')]), // Transición entre 'normal' y 'flash' con duración de 0.5 segundos
    ]),
    trigger('jello', [
      // Creamos la animación 'jello'
      state('normal', style({ transform: 'scale(1)' })), // Definimos el estado 'normal' con escala 1
      state('jello', style({ transform: 'scale(1.1) rotate(5deg)' })), // Definimos el estado 'jello' con escala 1.1 y rotación 5 grados
      transition('normal <=> jello', [animate('0.5s ease-in-out')]), // Transición entre 'normal' y 'jello' con duración de 0.5 segundos
    ]),
    trigger('zoom', [
      // Creamos la animación 'zoom'
      state('normal', style({ transform: 'scale(1)' })), // Definimos el estado 'normal' con escala 1
      state('zoom', style({ transform: 'scale(1.5)' })), // Definimos el estado 'zoom' con escala 1.5
      transition('normal <=> zoom', [animate('0.5s ease-in-out')]), // Transición entre 'normal' y 'zoom' con duración de 0.5 segundos
    ]),
  ],
})
export class HomeComponent {
  title = 'angular-animations'; // Título de la aplicación
  isFadeIn = false; // Estado para la animación 'fadeIn'
  isSlideIn = false; // Estado para la animación 'slideIn'
  isBounce = false; // Estado para la animación 'bounce'
  isRotate = false; // Estado para la animación 'rotate'
  isFlip = false; // Estado para la animación 'flip'
  isExpand = false; // Estado para la animación 'expand'
  isCollapse = false; // Estado para la animación 'collapse'
  isFlash = false; // Estado para la animación 'flash'
  isJello = false; // Estado para la animación 'jello'
  isZoom = false; // Estado para la animación 'zoom'
  images = [
    // Lista de imágenes para el carrusel
    'https://d6isf1yxni2j5.cloudfront.net/large_videojuegos_2024_34c329fe56.jpg',
    'https://m.media-amazon.com/images/I/71TBfitGpML._SL1500_.jpg',
    'https://i0.wp.com/lavidaesunvideojuego.com/wp-content/uploads/2019/07/Ahora-Super-Mario-Maker-2-permite-subir-el-doble-de-niveles-creados-la_vida_Es_un_videojuego.jpg',
  ];
  currentImageIndex = 0; // Índice de la imagen actual del carrusel
  carouselInterval: any; // Variable para el intervalo del carrusel

  get currentImage() {
    // Método getter para obtener la imagen actual
    return this.images[this.currentImageIndex]; // Retorna la imagen según el índice actual
  }

  isLoading = true; // Estado de carga inicial (true significa que se están cargando imágenes)

  ngOnInit() {
    // Método que se ejecuta al inicializar el componente
    this.preloadImages(); // Llama a la función para pre-cargar las imágenes
  }

  preloadImages() {
    // Método para pre-cargar las imágenes
    const imageElements = this.images.map((src) => {
      // Mapea la lista de URLs a elementos de imagen
      const img = new Image(); // Crea un nuevo elemento de imagen
      img.src = src; // Asigna la URL de la imagen al atributo src
      return img; // Retorna el elemento de imagen
    });

    // Espera a que todas las imágenes se carguen usando Promises
    Promise.all(
      imageElements.map(
        (img) =>
          new Promise<void>((resolve) => {
            img.onload = () => resolve(); // Resuelve la promesa cuando la imagen se carga
          })
      )
    ).then(() => {
      // Cuando todas las promesas se resuelven
      this.isLoading = false; // Cambia el estado de carga a false (oculta el loader)
    });
  }

  startCarousel() {
    // Método para iniciar el carrusel
    this.stopCarousel(); // Detiene el carrusel en caso de que ya esté corriendo
    this.carouselInterval = setInterval(() => {
      // Establece un intervalo para cambiar la imagen
      this.nextImage(); // Cambia a la siguiente imagen
    }, 200); // Cambia de imagen cada 2 segundos
  }

  stopCarousel() {
    // Método para detener el carrusel
    if (this.carouselInterval) {
      // Verifica si hay un intervalo activo
      clearInterval(this.carouselInterval); // Limpia el intervalo
      this.carouselInterval = null; // Reinicia la variable del intervalo
    }
  }

  nextImage() {
    // Método para avanzar a la siguiente imagen
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length; // Incrementa el índice de la imagen actual
  }

  previousImage() {
    // Método para retroceder a la imagen anterior
    this.currentImageIndex = // Cambia el índice actual
      this.currentImageIndex === 0
        ? this.images.length - 1
        : this.currentImageIndex - 1; // Si está en la primera imagen, vuelve a la última
  }

  ngOnDestroy() {
    // Método que se ejecuta al destruir el componente
    this.stopCarousel(); // Asegura que el carrusel se detenga cuando el componente se destruye
  }
}
