import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  loading = false;
  success = false;
  error = false;

  sendEmail(form: NgForm): void {
    // ❌ Stop if invalid
    if (form.invalid) {
      return;
    }

    // 🛡 Honeypot (spam protection)
    if (form.value.company) {
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
        message: form.value.message
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

  clearForm(form: NgForm): void {
    form.resetForm();
    this.success = false;
    this.error = false;
  }

  navigateToSuccess(): void {
    // Use Angular's router to navigate to the success page
    window.location.href = '#/success';
  }
}
