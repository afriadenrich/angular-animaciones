import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations'; // Importamos las funciones necesarias para animaciones
import { NgClass } from '@angular/common'; // Importamos NgClass y NgStyle para dinámicamente cambiar clases y estilos
import { Component, OnDestroy, OnInit } from '@angular/core'; // Importamos los módulos necesarios para Angular
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet,
} from '@angular/router'; // Importamos el módulo para manejar rutas
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root', // Definimos el selector del componente
  standalone: true, // Indicamos que este componente es standalone
  imports: [RouterOutlet, NgClass, RouterLink], // Importamos RouterOutlet y NgClass
  templateUrl: './app.component.html', // Indicamos el archivo de template HTML
  styleUrls: ['./app.component.css'], // Indicamos el archivo de estilos CSS
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

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
}
