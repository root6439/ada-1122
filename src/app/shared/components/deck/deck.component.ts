import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Deck } from '../../models/Deck.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'deck',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss',
})
export class DeckComponent {
  @Input()
  data: Deck;

  @Output()
  emitter = new EventEmitter();

  onClick() {
    this.emitter.emit('Clicou no botão');
  }
}
