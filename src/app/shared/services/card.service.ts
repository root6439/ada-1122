import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
 Os serviços fornecem métodos e variáveis para serem consumidos por nossos components
 Através do serviço podemos exercer o principio da responsabilidade unica, pois não 
 é da conta do componente saber como são feitas chamadas http, ou como funciona 
 determinada regra de negócio
*/
@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  nome = '';

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

    return this.http.get('https://api.pokemontcg.io/v2/cards', {
      headers,
    });
  }
}
