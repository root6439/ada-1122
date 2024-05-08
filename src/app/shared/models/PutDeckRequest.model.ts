import { Deck } from './Deck.model';

export type PutDeckRequest = Pick<Deck, 'name' | 'cards'>;
