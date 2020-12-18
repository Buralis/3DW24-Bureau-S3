import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Ken Kaneki'},
      { id: 12, name: 'Levi Ackerman'},
      { id: 13, name: 'Sasuke Uchiha'},
      { id: 14, name: 'Inuyasha'},
      { id: 15, name: 'Monkey D. Luffy'},
      { id: 16, name: 'Jotaro Kujo'},
      { id: 17, name: 'Light Yagami'},
      { id: 18, name: 'Shôtarô Kaneda'},
      { id: 19, name: 'Yami Sukehiro'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}