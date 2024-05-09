import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Deck } from '../../models/Deck.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'deck',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss',
})
export class DeckComponent {
  @Input()
  data: Deck;

  @Output()
  onClickEdit = new EventEmitter();

  onClick() {
    this.onClickEdit.emit();
  }
}
