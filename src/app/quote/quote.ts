import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ],
  templateUrl: './quote.html',
  styleUrl: './quote.css',
})
export class Quote {
  loading = false;
  success = false;
  error = false;
  // Attachment upload temporarily disabled until EmailJS subscription is enabled.
  // selectedPhotoCount = 0;

  serviceTypes: string[] = [
    'Make Ready – Full Service',
    'Trash Out',
    'Grounds',
    'Appliance Moving',
    'Maintenance',
    'Other'
  ];

  bedroomOptions: string[] = ['Studio', '1', '2', '3', '4', '5+'];

  timelineOptions: string[] = [
    'Standard Turn (3–5 Days)',
    '48-Hour Turn',
    '24-Hour Rush',
    'Flexible Timeline',
    'Emergency Service'
  ];

  propertyTypes: string[] = [
    'Single Family Home',
    'Apartment',
    'Condo / Townhome',
    'Multi-Family',
    'Commercial',
    'Other'
  ];

  sendQuoteRequest(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    // Honeypot spam protection
    if (form.value.companyTrap) {
      return;
    }

    this.loading = true;
    this.success = false;
    this.error = false;

    emailjs.send(
      'service_k38e3ww',
      'template_fwk9i3x',
      {
        name: form.value.name,
        phone: form.value.phone,
        message:
          `Quote Request\n` +
          `Company: ${form.value.company}\n` +
          `Email: ${form.value.email}\n` +
          `Property Address: ${form.value.propertyAddress}\n` +
          `Service Type: ${form.value.serviceType}\n` +
          `Bedrooms: ${form.value.bedrooms}\n` +
          `Timeline/Urgency: ${form.value.timeline}\n` +
          `Property Type: ${form.value.propertyType}`
      },
      'HRChD0YVgF_H1qNoN'
    )
      .then(() => {
        this.success = true;
        form.resetForm();
        this.navigateToSuccess();
      })
      .catch((err) => {
        console.error(err);
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  // onPhotosSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement | null;
  //   this.selectedPhotoCount = input?.files?.length ?? 0;
  // }

  navigateToSuccess(): void {
    // Use Angular's router to navigate to the success page
    window.location.href = '#/success';
  }
}
