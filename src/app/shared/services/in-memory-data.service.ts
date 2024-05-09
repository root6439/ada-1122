import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Deck } from '../models/Deck.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const decks: Deck[] = [];
    return { decks };
  }

  genId(decks: Deck[]): number {
    return decks.length > 0
      ? Math.max(...decks.map((deck) => deck.id)) + 1
      : 1;
  }
}
