import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    RouterLink,
    CarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tiles: any[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
  ];

  // contactUs() {
  //   router
  // }
}
