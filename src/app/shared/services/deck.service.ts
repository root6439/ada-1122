import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deck } from '../models/Deck.model';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor(private http: HttpClient) {}

  getDecks() {
    return this.http.get<Deck[]>('api/decks');
  }
}
