import { Routes } from '@angular/router';

export default [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/features/auth.routes').then((m) => m.default),
  },
  {
    path: 'utl',
    loadChildren: () =>
      import('./utl/utl.routes').then((m) => m.default),
  },
  {
    path: 'formulario',
    loadChildren: () =>
      import('./formularios/formularios.routes').then((m) => m.default),
  },
  {
    path: '',
    redirectTo: '/auth/sign-in',
    pathMatch: 'full',
  },
] as Routes;
