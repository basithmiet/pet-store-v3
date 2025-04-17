import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Order, Pet, User } from '../models/petstore';


@Injectable({
  providedIn: 'root',
})
export class PetstoreService {
  private baseUrl = 'https://petstore3.swagger.io/api/v3';

  constructor(private http: HttpClient) {}

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.baseUrl}/pet`, pet);
  }

  updatePet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.baseUrl}/pet`, pet);
  }

  findPetsByStatus(status: string[]): Observable<Pet[]> {
    let params = new HttpParams();
    status.forEach(s => params = params.append('status', s));
    return this.http.get<Pet[]>(`${this.baseUrl}/pet/findByStatus`, { params });
  }

  findPetsByTags(tags: string[]): Observable<Pet[]> {
      let params = new HttpParams();
      tags.forEach(tag => params = params.append('tags', tag));
    return this.http.get<Pet[]>(`${this.baseUrl}/pet/findByTags`, { params });
  }

  getPetById(petId: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/pet/${petId}`);
  }

  updatePetWithForm(petId: number, name?: string, status?: string): Observable<any> {
    let params = new HttpParams();
    if (name) params = params.set('name', name);
    if (status) params = params.set('status', status);
    return this.http.post<any>(`${this.baseUrl}/pet/${petId}`, null, { params });
  }

  deletePet(petId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/pet/${petId}`);
  }

  uploadFile(petId: number, file: File, additionalMetadata?: string): Observable<ApiResponse> {
    const formData = new FormData();
    formData.append('file', file);
    if(additionalMetadata) formData.append('additionalMetadata', additionalMetadata)
    return this.http.post<ApiResponse>(`${this.baseUrl}/pet/${petId}/uploadImage`, formData);
  }

  getInventory(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${this.baseUrl}/store/inventory`);
  }

  placeOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/store/order`, order);
  }

  getOrderById(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/store/order/${orderId}`);
  }

  deleteOrder(orderId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/store/order/${orderId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/user`, user);
  }

  createUsersWithListInput(users: User[]): Observable<User[]> {
    return this.http.post<User[]>(`${this.baseUrl}/user/createWithList`, users);
  }

  getUserByName(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${username}`);
  }

  updateUser(username: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/user/${username}`, user);
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/user/${username}`);
  }

  loginUser(username?: string, password?: string): Observable<string> {
    let params = new HttpParams();
    if (username) params = params.set('username', username);
    if (password) params = params.set('password', password);
    return this.http.get<string>(`${this.baseUrl}/user/login`,{ params });
  }

  logoutUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user/logout`);
  }
}