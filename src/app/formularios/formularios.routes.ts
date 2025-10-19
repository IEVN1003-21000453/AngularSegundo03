import { Routes } from '@angular/router';

export default [
  {
    path: 'distancia',
    loadComponent: () =>
      import('./distancia/distancia.component').then(
        (c) => c.DistanciaComponent
      ),
  },
  {
    path: 'aporb',
    loadComponent: () =>
      import('../aporb/aporb.component').then((c) => c.AporbComponent),
  },
  {
    path: 'zodiaco',
    loadComponent: () =>
      import('../zodiaco/zodiaco.component').then((c) => c.ZodiacoComponent),
  },
] as Routes;
