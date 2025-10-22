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
        path: 'produtos',
        loadComponent: () =>
          import('./pages/produtos/produtos.component').then((m) => m.ProdutosComponent),
      },
      {
        path: 'funcionarios',
        loadComponent: () =>
          import('./pages/funcionarios/funcionarios.component').then(
            (m) => m.FuncionariosComponent
          ),
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
