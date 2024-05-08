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
}
