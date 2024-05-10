import { Routes } from '@angular/router';
import { NewDeckComponent } from './pages/new-deck/new-deck.component';
import { SearchDecksComponent } from './pages/search-decks/search-decks.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

/* 
  Nas rotas definimos todo o mapeamento da nossa aplicação
  Por exemplo, se o usuário acessar localhost:4200/new-deck, será apresentado na tela o NewDeckComponent
  Uma rota não necessariamente precisa apontar para um componente, ela pode apontar para outra rota por exemplo
  A rota possui propriedades mais complexas, como o canActivate, canDeactivate, children, etc...
  A rota coringa (**) quando o usuário tenta acessar uma rota não mapeada, renderizando o componente mapeado
*/
export const routes: Routes = [
  {
    path: 'new-deck',
    component: NewDeckComponent,
  },
  {
    path: 'update-deck/:id',
    component: NewDeckComponent,
  },
  {
    path: 'search-decks',
    component: SearchDecksComponent,
  },
  {
    path: '',
    redirectTo: 'search-decks',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
