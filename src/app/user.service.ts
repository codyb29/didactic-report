import { Injectable } from '@angular/core';
import { users } from './MongoDbEmulator';
import { UserProfile } from './UserProfile';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  authenticateUser (userID: string, password: string) {
    for (var i = 0; i < users.length; i++) {
      if (userID === users[i].userID && password === users[i].password) {
        return of(true);
      }
    }
    return of(false);
  }
}
