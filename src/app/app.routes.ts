import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'motorista',
        loadChildren: () =>
          import('./features/motorista/routes').then((m) => m.MOTORISTA_ROUTES),
      },
      {
        path: 'veiculo',
        loadChildren: () =>
          import('./features/veiculo/routes').then((m) => m.VEICULO_ROUTES),
      },
      {
        path: 'historicoKm',
        loadChildren: () =>
          import('./features/historico-km/routes').then((m) => m.HISTORICO_KM_ROUTES),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];
