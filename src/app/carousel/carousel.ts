import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Swiper and register web components
import { register } from 'swiper/element/bundle';
register();

export interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class CarouselComponent {

  images: CarouselImage[] = [
    {
      src: 'assets/images/moving1.jpg',
      alt: 'Slide 1',
      caption: 'Professional Move-Out Cleaning'
    },
    {
      src: 'assets/images/moving2.png',
      alt: 'Slide 2',
      caption: 'Move-In Ready Properties'
    },
    {
      src: 'assets/images/moving3.jpg',
      alt: 'Slide 3',
      caption: 'Expert Property Staging'
    },
    {
      src: 'assets/images/moving4.jpg',
      alt: 'Slide 4',
      caption: 'Fast & Reliable Service'
    }
  ];
}
