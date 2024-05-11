import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DeckService } from '../../shared/services/deck.service';
import { Deck } from '../../shared/models/Deck.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../shared/services/card.service';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

@Component({
  selector: 'app-new-deck',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './new-deck.component.html',
  styleUrl: './new-deck.component.scss',
})
export class NewDeckComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private deckService: DeckService,
    private router: Router,
    private cardService: CardService,
    private route: ActivatedRoute,
  ) {}

  editMode = false;
  cardId: number;

  /*
    Para trabalhar com reactive forms precisamos de uma versão orientada a objetos
    do nosso formulário
    Aqui, teremos praticamente a mesma estrutura porém escrita de outra forma e 
    vinculada ao html form através do atributo formGroup
  */
  deckForm = this.fb.group({
    name: ['', Validators.required],
    cards: [],
  });

  /* 
    ngOnInit é um life cycle hook (ganho de ciclo de vida) que implementa uma lógica
    assim que meu componente é inicializado
    Nesse caso estamos chamando o método verifyFlow assim que o componente é chamado 
    na tela
  */
  ngOnInit(): void {
    this.verifyFlow();
    this.getCards();
  }

  /*
    O método verifyFlow verifica qual fluxo estamos acessando, se é 
    de cadastro de deck ou atualização
    O método busca na url o parametro :id e joga o valor dentro de cardId
    Caso encontre valor na url, é retornado o próprio valor, caso contrário 
    é retornado undefined
    Após a atribuição, é verificado se cardId é diferente de undefined
    Caso seja, significa que estamos no fluxo de atualização
    E caso seja fluxo de atualização, chamamos o método getDeckById
    para preencher nosso formulário com os dados do deck que queremos atualizar
  */
  verifyFlow() {
    this.cardId = this.route.snapshot.params['id'];
    this.editMode = this.cardId != undefined;

    if (this.editMode) {
      this.getDeckById();
    }
  }

  /* 
  O método getDeckById chama o método getDeckById do deckService
  Esse método da service é um observable que retorna o valor informado
  pelo servidor
  Nesse caso específico, estamos setando no form o valor da propriedade
  name retornada na resposta do servidor
  */
  getDeckById() {
    this.deckService.getDeckById(this.cardId).subscribe((resp) => {
      this.deckForm.get('name').setValue(resp.name);
    });
  }

  // TODO: finalizar implementação
  getCards() {
    this.cardService.getCards().subscribe((resp) => {
      console.log(resp);
    });

  }

  onSubmit(): void {
    if (this.editMode) {
      this.updateDeck();
    } else {
      this.createDeck();
    }
  }

  updateDeck() {
    this.deckService.putDeck(this.deck).subscribe((_) => {
      this.navigateToSearch();
    });
  }

  createDeck() {
    this.deckService.postDeck(this.deck).subscribe((_) => {
      this.navigateToSearch();
    });
  }

  /* 
    Método que chama método navigateByUrl do serviço router
    Esse método é usado para forçar navegações no meu app
    Ele retorna uma promisse, que é resolvida após a navegação ter
    sido concluida ou não
  */
  navigateToSearch() {
    this.router.navigateByUrl('/search-decks').then((navigationSuccess) => {
      if (navigationSuccess) {
        console.log('navegou para outra tela');
      }
    });
  }

  get deck(): Deck {
    return {
      id: this.cardId,
      name: this.deckForm.get('name').value,
      cards: [],
    };
  }
}
