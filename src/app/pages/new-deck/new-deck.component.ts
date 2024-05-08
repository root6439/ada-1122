import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DeckService } from '../../shared/services/deck.service';
import { Deck } from '../../shared/models/Deck.model';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  deckForm = this.fb.group({
    name: ['', Validators.required],
    cards: [],
  });

  ngOnInit(): void {}

  onSubmit(): void {
    const deck: Deck = {
      name: this.deckForm.get('name').value,
      cards: this.deckForm.get('cards').value,
    };

    this.deckService.postDeck(deck).subscribe((resp) => {
      this.router.navigateByUrl('/search-decks').then((navigationSuccess) => {
        if (navigationSuccess) {
          console.log('navegou para outra tela');
        }
      });
    });
  }
}
