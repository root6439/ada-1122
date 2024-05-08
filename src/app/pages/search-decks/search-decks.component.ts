import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../shared/services/deck.service';
import { DeckComponent } from '../../shared/components/deck/deck.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-decks',
  standalone: true,
  imports: [CommonModule, DeckComponent, MatButtonModule, RouterModule],
  templateUrl: './search-decks.component.html',
  styleUrl: './search-decks.component.scss',
})
export class SearchDecksComponent implements OnInit {
  constructor(private deckService: DeckService) {}

  decks: any;

  ngOnInit() {
    this.deckService.getDecks().subscribe((value) => {
      this.decks = value;
    });
  }
}
