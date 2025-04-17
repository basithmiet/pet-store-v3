import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Pet } from '../../../models/petstore';
import { PetstoreService } from '../../../services/petstore.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet-detail',
  templateUrl: 'pet-detail.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule],
  styleUrls:['./pet-detail.component.css']
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