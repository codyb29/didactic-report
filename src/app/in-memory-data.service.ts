import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
        { id: 12345,
        username: 'hellomoto',
        password: 'motorolla',
        firstName: 'cody',
        lastName: 'barrett' },
        { id: 67891,
            username: 'mildlydecent',
            password: 'helloworld',
            firstName: 'clark',
            lastName: 'kent' }
    ];
    return {users};
  }
}