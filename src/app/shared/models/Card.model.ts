import { Card, CardImage } from 'pokemon-tcg-sdk-typescript/dist/sdk';

export type CardCustom = Pick<Card, 'id' | 'name' | 'images'>;
