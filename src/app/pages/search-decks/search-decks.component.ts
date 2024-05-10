import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../shared/services/deck.service';
import { DeckComponent } from '../../shared/components/deck/deck.component';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { Deck } from '../../shared/models/Deck.model';
import { CardService } from '../../shared/services/card.service';

@Component({
  selector: 'app-search-decks',
  standalone: true,
  imports: [CommonModule, DeckComponent, MatButtonModule, RouterModule],
  templateUrl: './search-decks.component.html',
  styleUrl: './search-decks.component.scss',
})
export class SearchDecksComponent implements OnInit {
  constructor(
    private deckService: DeckService,
    private router: Router,
    private cardService: CardService
  ) {}

  decks: Deck[] = [];

  ngOnInit() {
    this.deckService.getDecks().subscribe((value) => {
      this.decks = value;
    });
  }

  redirectTo(id: number) {
    this.router.navigate(['update-deck', id]);
  }
}
