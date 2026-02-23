import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Services } from './services/services';
import { Quote } from './quote/quote';
import { Confirmation } from './confirmation/confirmation';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: Services },
  { path: 'get-a-quote', component: Quote },
  { path: 'quote', redirectTo: 'get-a-quote' },
  { path: 'success', component: Confirmation },
  { path: '**', redirectTo: '' }
];
