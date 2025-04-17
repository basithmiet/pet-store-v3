import { Component } from '@angular/core';
import { PetstoreService } from '../../../services/petstore.service';
import { User } from '../../../models/petstore';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  imports:[FormsModule, CommonModule]
})
export class UserListComponent {
  users: User[] = [];
  userName: string = '';

  constructor(private petstoreService: PetstoreService) {}

  searchUser() {
    if (this.userName) {
      this.petstoreService.getUserByName(this.userName).subscribe({
        next: (user) => {
          this.users = [user];
        },
        error: (err) => {
          console.error('Error fetching user:', err);
        },
      });
    }
  }
}