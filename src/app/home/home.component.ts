import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    RouterLink,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  title =
    "Fast, Reliable, Move-In Ready Solutions for Property Managers".toUpperCase();
  body =
    "Make Ready Go is your trusted partner for fast, reliable apartment turns. We help property managers reduce vacancy time, protect asset value, and get units move-in ready without delays.";
}
