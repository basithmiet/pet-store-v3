import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../models/petstore';
import { PetstoreService } from '../../../services/petstore.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
  imports: [CommonModule, RouterModule ],
  standalone: true
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  status: 'available' | 'pending' | 'sold' = 'available';

  constructor(private petstoreService: PetstoreService) { }

  ngOnInit(): void {
    this.loadPets();
  }

  loadPets(): void {
    this.petstoreService.findPetsByStatus([this.status]).subscribe({
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
