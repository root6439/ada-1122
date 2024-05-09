import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deck } from '../models/Deck.model';
import { PutDeckRequest } from '../models/PutDeckRequest.model';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor(private http: HttpClient) {}

  getDecks() {
    return this.http.get<Deck[]>('api/decks');
  }

  getDeckById(id: number) {
    return this.http.get<Deck>('api/decks/' + id);
  }

  postDeck(deck: Deck) {
    return this.http.post<Deck[]>('api/decks', deck);
  }

  putDeck(deck: Deck) {
    return this.http.put<Deck[]>(`api/decks/`, deck);
  }

  deleteDeck(id: number) {
    return this.http.delete<Deck[]>(`api/decks/${id}`);
  }
}
