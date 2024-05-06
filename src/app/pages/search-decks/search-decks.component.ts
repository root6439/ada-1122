import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MyPipe } from '../../shared/pipes/MyPipe.pipe';
import { DeckService } from '../../shared/services/deck.service';

@Component({
  selector: 'app-search-decks',
  standalone: true,
  imports: [CommonModule, MyPipe],
  templateUrl: './search-decks.component.html',
  styleUrl: './search-decks.component.scss',
})
export class SearchDecksComponent implements OnInit, OnDestroy {
  constructor(private deckService: DeckService) {}

  decks: any;

  ngOnInit() {
    console.log('componente criado');
    this.decks = this.deckService.getDecks();
    console.log(this.decks);
  }

  ngOnDestroy(): void {
    console.log('destruiu o component');
  }
}
