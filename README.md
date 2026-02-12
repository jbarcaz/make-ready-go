# Angular 21 App with Material Design

A modern Angular 21 application featuring:
- ✅ Angular Material UI components
- ✅ Standalone components architecture
- ✅ Top navigation bar with 3 sections (Home, About, Contact)
- ✅ Routing between pages
- ✅ Material Design theme (Indigo-Pink)
- ✅ Responsive layout
- ✅ Material icons

## Prerequisites

- Node.js 20.19+ or 22.12+
- npm (comes with Node.js)

## Getting Started

### 1. Install Dependencies

```bash
cd angular21-app
npm install
```

### 2. Run Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser.

The application will automatically reload when you make changes to source files.

## Project Structure

```
angular21-app/
├── src/
│   ├── app/
│   │   ├── home/              # Home page component
│   │   ├── about/             # About page component
│   │   ├── contact/           # Contact page component
│   │   ├── app.component.*    # Main app with navigation
│   │   ├── app.routes.ts      # Route definitions
│   │   └── app.config.ts      # App configuration
│   ├── index.html             # Main HTML file
│   ├── main.ts                # Application entry point
│   └── styles.css             # Global styles
├── angular.json               # Angular CLI configuration
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript configuration
```

## Features

### Navigation
- Material toolbar at the top
- Three navigation links: Home, About, Contact
- Active route highlighting
- Responsive design

### Pages

**Home Page:**
- Welcome card with feature list
- Quick action buttons
- Material dividers and typography

**About Page:**
- Technology stack list with icons
- Feature chips
- Card actions

**Contact Page:**
- Material form with input validation
- Contact information list
- Icons for visual appeal

## Material Components Used

- Toolbar
- Cards
- Buttons
- Form fields & inputs
- Icons
- Lists
- Dividers
- Chips

## Customization

### Change Theme

Edit `angular.json` and replace the theme:

```json
"styles": [
  "@angular/material/prebuilt-themes/purple-green.css",
  "src/styles.css"
]
```

Available themes:
- `indigo-pink.css` (default)
- `deeppurple-amber.css`
- `pink-bluegrey.css`
- `purple-green.css`

### Add New Pages

1. Create component folder in `src/app/`
2. Add route to `src/app/app.routes.ts`
3. Add navigation link to `src/app/app.component.html`

Example:
```typescript
// app.routes.ts
import { NewComponent } from './new/new.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'new', component: NewComponent },  // Add this
  { path: '**', redirectTo: '' }
];
```

### Modify App Title

Edit `src/app/app.component.html`:
```html
<mat-toolbar color="primary">
  <span>Your App Name</span>
  ...
</mat-toolbar>
```

## Building for Production

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

## Angular 21 Features

This app uses Angular 21's modern features:

- **Standalone Components**: No NgModules needed
- **Simplified Bootstrapping**: Using `bootstrapApplication`
- **Signal-based Change Detection**: Improved performance
- **New Control Flow**: Using `@if`, `@for` syntax (when needed)
- **Dependency Injection**: Simplified with `inject()`

## Material Design

The app follows Material Design principles:
- Consistent spacing and typography
- Elevation with cards and toolbar
- Color theming
- Responsive layout
- Touch-friendly targets

## Development Tips

### Add New Material Components

1. Import in your component:
```typescript
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule, ...]
})
```

2. Use in template:
```html
<mat-icon>home</mat-icon>
```

### Available Material Modules

Common modules already in use:
- `MatToolbarModule`
- `MatButtonModule`
- `MatCardModule`
- `MatFormFieldModule`
- `MatInputModule`
- `MatIconModule`
- `MatListModule`
- `MatChipsModule`
- `MatDividerModule`

See [Angular Material docs](https://material.angular.io/components) for more components.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Learn More

- [Angular Documentation](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [Material Design Guidelines](https://m3.material.io/)

## License

This is a sample Angular 21 application for learning and development purposes.
