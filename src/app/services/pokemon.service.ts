import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiURL ='https://pokeapi.co/api/v2/pokemon';
  private favouritesKey = 'favouritePokemon';
  private favourite: string[] = [];

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<{ name: string}[]> {
    return this.http.get<{ results: { name: string }[]}>(`${this.apiURL}?limit=151`).pipe(
      map(response  => {
      console.log(response); return response.results;})
    );
  }
}
