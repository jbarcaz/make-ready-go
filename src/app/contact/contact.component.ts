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
  phone = '';

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
      'service_2t59t3t',
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
      this.phone = '';
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
    this.phone = '';
    this.success = false;
    this.error = false;
  }

  onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    const formatted = this.formatPhone(input?.value ?? '');
    if (input) {
      input.value = formatted;
    }
    this.phone = formatted;
  }

  private formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 10);

    if (digits.length < 4) {
      return digits;
    }

    if (digits.length < 7) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }

    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }

  navigateToSuccess(): void {
    // Use Angular's router to navigate to the success page
    window.location.href = '#/success';
  }
}
