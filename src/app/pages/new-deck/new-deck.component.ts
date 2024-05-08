import { Component, OnInit } from '@angular/core';
import { CardService } from '../../shared/services/card.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
  constructor(private fb: FormBuilder) {}

  deckForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit() {}
}
