import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../services/pokemon.service';
import {CommonModule, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  imports: [ CommonModule,
    TitleCasePipe
  ],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})

export class PokemonDetailsComponent {
  pokemon: any;
  isFavourite: boolean = false;

  constructor (private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
    this.route.params.subscribe(params => {
      this.fetchPokemon(params['name']);
      this.checkFavourite(params['name']);
    })
  }

  fetchPokemon(name: string) {
    this.pokemonService.getPokemonDetails(name).subscribe((data: any) => {
      this.pokemon = data;
      console.log(data);
    })
  }

  checkFavourite(name: string) {
    this.isFavourite = this.pokemonService.isFavourite(name);
  }

  toggleFavourite() {
    this.pokemonService.toggleFavourite(this.pokemon.name);
    this.isFavourite = !this.isFavourite;
  }

  goBack(): void {
    this.router.navigate(['/'])
  }

}
