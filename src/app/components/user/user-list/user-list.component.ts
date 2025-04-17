import { Component } from '@angular/core';
import { PetstoreService } from '../../../services/petstore.service';
import { User } from 'src/app/models/petstore';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
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