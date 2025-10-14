import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, interval, map, Observable, take } from 'rxjs';
import { IUser } from '../models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class StreamService {
  public numbers$: Observable<number> = interval(1000).pipe(take(100));
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiUrl}/users`);
  }
  
  searchUsers(query: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiUrl}/users`).pipe(
      delay(300),
      map((users: IUser[]) => {
        if (!query || query.trim() === '') {
          return users;
        }

        const searchTerm = query.toLowerCase().trim();
        return users.filter(user => 
          user.name.toLowerCase().includes(searchTerm) ||
          user.username.toLowerCase().includes(searchTerm) ||
          user.email.toLowerCase().includes(searchTerm) ||
          user.phone.toLowerCase().includes(searchTerm) ||
          user.website.toLowerCase().includes(searchTerm) ||
          user.company.name.toLowerCase().includes(searchTerm) ||
          user.address.city.toLowerCase().includes(searchTerm) ||
          user.address.street.toLowerCase().includes(searchTerm) ||
          user.address.zipcode.toLowerCase().includes(searchTerm)
        );
      })
    );
  }
  
  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/users/${id}`);
  }
  
  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/users`, user);
  }
  
  updateUser(id: number, user: Partial<IUser>): Observable<IUser> {
    return this.http.patch<IUser>(`${this.apiUrl}/users/${id}`, user);
  }
  
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }
}