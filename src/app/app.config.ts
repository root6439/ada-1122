import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { CardService } from './shared/services/card.service';
import { DeckService } from './shared/services/deck.service';

/*
  Aqui nós instanciamos os serviços globais de nossa aplicação.
  Através do provider criamos uma única instancia do nosso serviço para nossa aplicação
  Ou seja, se o component A muda o estado do serviço, as alterações são refletidas no component B, C, D..., 
  pois todos esses components compartilham a mesma instancia do serviço

  A declaração de um serviço no array de providers pode ser opcional ou não, dependendo do serviço.
  Alguns são obrigatórios enquanto outros não são.
*/
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
    ),
    CardService,
    DeckService,
  ],
};
