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
    private route: ActivatedRoute
  ) {}

  editMode = false;
  cardId: number;

  deckForm = this.fb.group({
    name: ['', Validators.required],
    cards: [],
  });

  ngOnInit(): void {
    this.verifyFlow();
  }

  verifyFlow() {
    this.cardId = this.route.snapshot.params['id'];
    this.editMode = this.cardId != undefined;
    
    if (this.editMode) {
      this.getDeckById();
    }
  }

  getDeckById() {
    this.deckService.getDeckById(this.cardId).subscribe((resp) => {
      this.deckForm.get('name').setValue(resp.name);
    });
  }

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
    this.deckService
      .putDeck({
        id: this.cardId,
        name: this.deckForm.get('name').value,
        cards: [],
      })
      .subscribe((_) => {
        this.navigateToSearch();
      });
  }

  createDeck() {
    const deck: Deck = {
      name: this.deckForm.get('name').value,
      cards: this.deckForm.get('cards').value,
    };

    this.deckService.postDeck(deck).subscribe((resp) => {
      this.navigateToSearch();
    });
  }

  navigateToSearch() {
    this.router.navigateByUrl('/search-decks').then((navigationSuccess) => {
      if (navigationSuccess) {
        console.log('navegou para outra tela');
      }
    });
  }
}
