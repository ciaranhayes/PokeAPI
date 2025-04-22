import { Component } from '@angular/core';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';


@Component({
  selector: 'app-root',
  imports: [PokemonSearchComponent, PokemonDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokeAPI';
}
