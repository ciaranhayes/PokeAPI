import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiURL ='https://pokeapi.co/api/v2/pokemon';
  private favouritesKey = 'favouritePokemon';
  private favourites: string[] = [];

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<{ name: string}[]> {
    return this.http.get<{ results: { name: string }[]}>(`${this.apiURL}?limit=151`).pipe(
      map(response  => response.results)
    );
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${name}`);
  }

  loadFavourites() {
    const storedFavourites = localStorage.getItem(this.favouritesKey);
    this.favourites = storedFavourites ? JSON.parse(storedFavourites) : [];
  }

  saveFavourites() {
    localStorage.setItem(this.favouritesKey, JSON.stringify(this.favourites));
  }

  getFavourites(): string[] {
    this.loadFavourites();
    return this.favourites;
  }

  isFavourite(name: string) {
    return this.favourites.includes(name);
  }

  toggleFavourite(name: string) {
    if (this.isFavourite(name)) {
      this.favourites = this.favourites.filter(favourite => favourite !== name);
    } else {
      this.favourites.push(name);
    }
    this.saveFavourites();
  }
}


