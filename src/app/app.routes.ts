import { UserListComponent } from './components/user/user-list/user-list.component';
import { OrderListComponent } from './components/store/order-list/order-list.component';
import { Routes } from '@angular/router';
import { PetManagementComponent } from './components/pet/pet-management/pet-management.component';
import { petRoutes } from './components/pet/pet.routes';

export const routes: Routes = [
  {
    path: 'pets',
    component: PetManagementComponent,
    children: petRoutes,
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
      path: 'orders',
      component: OrderListComponent
  },
  { path: '', redirectTo: '/pets', pathMatch: 'full' }, // Redirect to the pet list as the default route
  { path: '**', redirectTo: '/pets' } // Redirect any unknown route to the pet list
];
