import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  readonly services = [
    {
      title: 'Make Ready - Full Service',
      description: 'Complete unit turns from start to finish so your team can keep leasing on schedule.',
    },
    {
      title: 'Trash Out',
      description: 'Fast debris and bulk item removal to help units move quickly into the next phase.',
    },
    {
      title: 'Grounds',
      description: 'Exterior cleaning and presentation support that helps the property show better.',
    },
    {
  title: 'Housekeeping',
  description: 'Professional cleaning and detailing services to keep units spotless and ready to show.',
},
    {
      title: 'Appliance Moving',
      description: 'Safe, efficient appliance handling and relocation for turn and maintenance needs.',
    },
    {
      title: 'Ongoing Property Support',
      description: 'A dependable outsourced partner for communities that need responsive recurring help.',
    },
  ];
}
