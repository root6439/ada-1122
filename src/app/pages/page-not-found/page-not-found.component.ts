import { Component } from '@angular/core';

/* 
  Componente que vai ser exibido caso o usuário 
  tente acessar uma rota não mapeada 
*/
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
