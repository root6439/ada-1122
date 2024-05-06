import { Component, Input, SimpleChanges } from '@angular/core';
import { Card } from '../../models/Card.model';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss'
})
export class DeckComponent { 

  @Input()
  id: number;

  @Input()
  name: string;

  @Input()
  cards: Card[];

  ngOnChanges(changes: SimpleChanges) {
    console.log(`mudou o valor da variavel ${changes['id']}`);
    
  }

}
