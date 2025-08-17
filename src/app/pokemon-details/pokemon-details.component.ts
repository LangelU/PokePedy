import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { SpinnerService } from '../services/spinner/spinner.service';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonName: string = '';
  titleText = 'Pokemon';
  pokemonDetails = { 'display': 'none' }
  loading = false;
  pokemonData: {[key: string]: any} = {
    id: 0,
    order: 0,
    height: 0,
    weight: 0,
    name: [],
    forms: [],
    moves: [],
    stats: [],
    types: [],
    species: [],
    sprites: [],
    abilities: [],
    held_items: [],
    game_indices: [],
    base_experience: 0,
    location_area_encounters: "",
  }
  isNormalArtwork: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    public spinner: SpinnerService
  ) {

  }

  ngOnInit() {
    this.getPokemonNameParameter();
    this.getPokemonDetails();
  }

  getPokemonNameParameter() {
    this.route.paramMap.subscribe(params => {
      const pokemonNameParam = params.get('name');
      if (pokemonNameParam !== null) {
        this.pokemonName = pokemonNameParam;
      } else {
        console.error('El parámetro "pokemonName" no está presente en la URL.');
      }
    });
  }

  getPokemonDetails() {
    var searchParameter = "pokemon/" + this.pokemonName;
    const key = Object.keys(this.pokemonData);
    this.activateSpinner();

    this.api.pokeApiGetMethod(searchParameter).subscribe(
      (data) => {
        key.forEach(key => {
          this.pokemonData[''+ key +''] = data[key];
        });
        this.loading = true;
        console.log("thisData: ", this.pokemonData);
      },
      (error) => {
        console.error("Ah inespered error ocurred");
      }
    )
  }

  setTitle(section: any) {
    this.titleText = section;
  }
  
  alterArtwork(){
    this.isNormalArtwork = !this.isNormalArtwork;
    console.log('working')
  }

  activateSpinner() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.pokemonDetails = {
        'display' : 'block'
      }
    }, 1500);
  }

}
