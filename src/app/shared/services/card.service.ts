import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardCustom } from '../models/Card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  getCards(
    page: number = 1,
    pageSize: number = 12,
    select: string = 'id, name, images',
    q: string = ''
  ) {
    const headers = new HttpHeaders();

    headers.append('X-Api-Key', 'b1455db4-924e-472c-aff1-255d09affd31');

    // const params = new HttpParams({
    //   fromObject: {
    //     page,
    //     pageSize,
    //     select,
    //     q,
    //   },
    // });

    return this.http.get<CardCustom[]>('https://api.pokemontcg.io/v2/cards', {
      headers,
    });
  }
}
