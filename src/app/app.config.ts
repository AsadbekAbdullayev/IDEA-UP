import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(), // Provide animations for Angular Material
    importProvidersFrom(
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      ReactiveFormsModule,
      FormsModule,
      CommonModule // Import CommonModule here
    ),
    provideNzI18n(en_US),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
};
