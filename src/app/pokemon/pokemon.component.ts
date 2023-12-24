import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(
    private pokemon: PokemonService,
  ) { }
  
  pokemonList: any;

  ngOnInit(): void {
    this.initialicePokemonList();
  }

  initialicePokemonList() {
    this.pokemonList = this.pokemon.pokemonList;
    console.log(this.pokemonList);
  }

}
