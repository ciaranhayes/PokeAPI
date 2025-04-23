import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon-search.component.html',
  styleUrl: './pokemon-search.component.css'
})
export class PokemonSearchComponent {
  searchTerm: string = '';
  allPokemon: { name: string }[] = [];
  filteredPokemon: { name: string }[] = [];
  favourites: string[] = [];

  constructor(private router: Router, private pokemonservice: PokemonService) {
    this.fetchPokemon();
    this.loadFavourites();
  }

  fetchPokemon() {
    this.pokemonservice.getPokemonList().subscribe((data: { name: string }[]) => {
      this.allPokemon = data;
      this.filterPokemon();
    });
  }

  filterPokemon() {
    this.filteredPokemon = this.allPokemon.filter((pokemon: {name: string}) => {
      return pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  loadFavourites() {
    this.favourites = this.pokemonservice.getFavourites();
  }

  toggleFavourite(name: string, event: Event) {
    event.stopPropagation();
    this.pokemonservice.toggleFavourite(name);
    this.loadFavourites();
  }

  viewDetails(name: string) {
    this.router.navigate(['/pokemon', name]);
  }
}
