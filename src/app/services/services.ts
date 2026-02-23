import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-services',
  imports: [MatCardModule, MatDivider],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

}
