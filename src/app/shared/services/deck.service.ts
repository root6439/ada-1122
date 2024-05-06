import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor() {}

  getDecks() {
    return [
      { id: 1, name: 'deck-1' },
      { id: 2, name: 'deck-2' },
      { id: 3, name: 'deck-3' },
    ];
  }
}
