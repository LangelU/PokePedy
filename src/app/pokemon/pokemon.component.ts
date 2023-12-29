import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonArray: any[] = [];
  artUrl: any;
  typesList: any;
  pokemonList: any;
  searchText = '';
  typeOne: string = 'all';
  typeTwo: string = 'all';
  filteredElements: any[] = this.pokemonArray;
  filterResults = true;
  typeColor: any = {
    'normal': {'border': '5px solid #c4c2c2', 'background-color': '#bbb9b98e'},
    'grass': {'border': '5px solid #5bb858', 'background-color': '#067c068e'},
    'poison': {'border': '5px solid #d25be2', 'background-color': '#940c998e'},
    'fire': {'border': '5px solid #f58e4a', 'background-color': '#eb4a008e'},
    'flying': {'border': '5px solid #8f96f5', 'background-color': '#5385d18e'},
    'water': {'border': '5px solid #6771ff', 'background-color': '#001aff8e'},
    'bug': {'border': '5px solid #8ed161', 'background-color': '#20c0008e'},
    'electric': {'border': '5px solid #e1e45e', 'background-color': '#c5c9008e'},
    'ground': {'border': '5px solid #d8da7b', 'background-color': '#b4b64b8e'},
    'fairy': {'border': '5px solid #ff92ed', 'background-color': '#ff64cb8e'},
    'steel': {'border': '5px solid #e2e1e2', 'background-color': '#c4c4c48e'},
    'fighting': {'border': '5px solid #ee6363', 'background-color': '#bd00008e'},
    'psychic': {'border': '5px solid #fc7de7', 'background-color': '#dd22958e'},
    'ice': {'border': '5px solid #7dfcf6', 'background-color': '#0ed6d68e'},
    'ghost': {'border': '5px solid #af66cc', 'background-color': '#4800798e'},
    'dark': {'border': '5px solid #916f65', 'background-color': '#3a0e008e'},
    'dragon': {'border': '5px solid #8983e9', 'background-color': '#1900ff8e'},
    'rock': {'border': '5px solid #9e7942', 'background-color': '#411f008e'}
  };
  alreadyFiltered = false;
  
  constructor(
    private pokemon: PokemonService,
    private api: ApiService
    
  ) {
    this.artUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
   }
  

  ngOnInit(): void {
    this.initialicepokemonArray();
    this.getTypes();
  }

  initialicepokemonArray() {
    this.pokemonArray = this.pokemon.pokemonArray;
    this.pokemonList = this.pokemonArray;
  }

  resourceNotAvailable(element: any){
    element.target.src = 'assets/img/noAvailable.png';
  }

  onChangeTypeOne(){
    this.filterByType();
  }

  onChangeTypeTwo(){
    this.filterByType();
  }

  getTypes() {
    this.api.pokeApiGetMethod("type").subscribe(
      (data) => {
        this.typesList = data.results;
      },
      (error) => {
        
      }
    );
  } 


  filterByName() {
    if (this.typeOne === 'all' && this.typeTwo === 'all') {
      this.pokemonList = this.pokemonArray.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.pokemonList = this.filteredElements.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    this.updateFilterResults();
  }
  
  filterByType() {
    if (this.typeOne === this.typeTwo) {
      this.filteredElements = this.pokemonArray.filter((pokemon: any) => {
        const oneTypeCondition = this.typeOne === 'all' || (pokemon.types && (pokemon.types.second_type === null && (pokemon.types.first_type === this.typeOne || pokemon.types.first_type === this.typeTwo)));
        return oneTypeCondition;
      });
    } else {
      this.filteredElements = this.pokemonArray.filter((pokemon: any) => {
        const firstTypeCondicion = this.typeOne === 'all' || (pokemon.types && (pokemon.types.first_type === this.typeOne || pokemon.types.first_type === this.typeTwo));
        const secondTypeCondicion = this.typeTwo === 'all' || (pokemon.types && (pokemon.types.second_type === this.typeTwo || pokemon.types.second_type === this.typeOne));
        return firstTypeCondicion && secondTypeCondicion;
      });
    }
    this.pokemonList = this.filteredElements
    this.updateFilterResults();
  }
  
  updateFilterResults() {
    const countResults = this.pokemonList.length;
    this.filterResults = countResults > 0;
  }

  resetFilters() {
    this.typeOne = 'all';
    this.typeTwo = 'all';
    this.searchText = '';
    this.pokemonList = this.pokemonArray;
  }
  
}
