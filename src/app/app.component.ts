import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

/*
 Um componente é um conjunto de tags html agrupadas
 Um componente também possui seus métodos que são utilizados para gerenciar as informações que entram
 e saem dele.

  selector: define a nomenclatura para nosso componente estar sendo instanciado em tela
  standalone: informa ao Angular que nosso componente não pertence a um módulo, que ele mesmo gerencia 
  seus imports e seus providers
  imports: Array onde são instanciados os módulos que vão servir nosso component
*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
