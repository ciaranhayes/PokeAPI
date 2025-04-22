import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})

export class PokemonDetailsComponent {
  pokemon: any;
  isFavourite: boolean = false;

  constructor (private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      console.log(params);
    })
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
