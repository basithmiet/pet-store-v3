import { Component, OnInit } from '@angular/core';
import { PetstoreService } from '../services/petstore.service';
import { Pet } from '../models/petstore';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  status: 'available' | 'pending' | 'sold' = 'available';

  constructor(private petstoreService: PetstoreService) { }

  ngOnInit(): void {
    this.loadPets();
  }

  loadPets(): void {
    this.petstoreService.findPetsByStatus({ status: [this.status] }).subscribe({
      next: (data) => {
        this.pets = data;
      },
      error: (error) => {
        console.error('Error fetching pets', error);
      }
    });
  }

  refreshPets(): void {
    this.loadPets();
  }
}
```
```html
<div class="container">
  <h2>Pet List</h2>
  <button (click)="refreshPets()" class="btn btn-primary">Refresh Pets</button>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let pet of pets">
        <td>{{ pet.id }}</td>
        <td>{{ pet.name }}</td>
        <td>{{ pet.status }}</td>
      </tr>
    </tbody>
  </table>
</div>
```
```css
.container {
  padding: 20px;
}

.btn {
  margin-bottom: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
}