import { Routes } from '@angular/router';
import { NewDeckComponent } from './pages/new-deck/new-deck.component';
import { SearchDecksComponent } from './pages/search-decks/search-decks.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'new-deck',
    component: NewDeckComponent,
  },
  {
    path: "update-deck/:id",
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
