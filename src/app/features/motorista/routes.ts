import {MotoristaListComponent} from './motorista-list/motorista-list.component';
import {Routes} from '@angular/router';
import { MotoristaUpdateComponent } from './motorista-update/motorista-update.component';

export const MOTORISTA_ROUTES: Routes = [
  {
    path: '',
    component: MotoristaListComponent,
  },
  {
    path: 'create',
    component: MotoristaUpdateComponent,
  },
  {
    path: 'edit/:id',
    component: MotoristaUpdateComponent,
    },
] as Routes;

