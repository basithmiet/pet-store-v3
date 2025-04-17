import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../../../models/petstore';
import { PetstoreService } from '../../../services/petstore.service';

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
        this.loadPet(Number(this.petId));
      }
    });
  }

  loadPet(petId: number): void {
    this.petstoreService.getPetById(petId).subscribe((pet: Pet) => {
      this.pet = pet;
    });
  }
}