import { Routes } from '@angular/router';
import { PetListComponent } from './components/pet/pet-list/pet-list.component';
import { PetDetailComponent } from './components/pet/pet-detail/pet-detail.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { OrderListComponent } from './components/store/order-list/order-list.component';

export const routes: Routes = [
  {
    path: 'pets',
    component: PetListComponent
  },
  {
    path: 'pet/:petId',
    component: PetDetailComponent
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
