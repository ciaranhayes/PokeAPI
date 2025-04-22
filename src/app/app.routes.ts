import { Routes } from '@angular/router';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

export const routes: Routes = [
    { path: '', component: PokemonSearchComponent },
    { path: 'pokemon/:name', component: PokemonDetailsComponent },
];
