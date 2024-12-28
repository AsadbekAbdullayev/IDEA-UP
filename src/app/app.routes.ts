import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'signin',
    loadComponent: () => import('./pages/signin/signin.component'),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component'),
  },
  { path: '**', redirectTo: 'not-found' },
];
