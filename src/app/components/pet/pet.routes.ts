import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

RouterModule.forChild([])
export const petRoutes: Routes = [
  { path: '', component: PetListComponent },
  { path: ':petId', component: PetDetailComponent },
];