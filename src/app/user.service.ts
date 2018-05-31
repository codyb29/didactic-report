import { Injectable } from '@angular/core';
<<<<<<< Updated upstream:src/app/user.service.ts
import { users } from './MongoDbEmulator';
import { UserProfile } from './UserProfile';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
=======
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/UserProfile';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('/api/users');
  }
>>>>>>> Stashed changes:src/app/_services/user.service.ts

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(user: User) {
    return this.http.post('/api/users', user);
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
}
