import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetstoreService } from 'src/app/services/petstore.service';
import { Pet } from 'src/app/models/petstore';

@Component({
  selector: 'app-pet-detail',
  template: ``,
  standalone: true
})
export class PetDetailComponent implements OnInit {
  pet: Pet | null = null;
  petId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private petstoreService: PetstoreService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.petId = params.get('petId');
      if (this.petId) {
        this.loadPet(this.petId);
      }
    });
  }

  loadPet(petId: string): void {
    this.petstoreService.getPetById(petId).subscribe(pet => {
      this.pet = pet;
    });
  }
}