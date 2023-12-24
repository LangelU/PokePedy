import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemonList: any[] = [
    {
      "number": 1,
      "name": "bulbasaur",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 2,
      "name": "ivysaur",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 3,
      "name": "venusaur",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 4,
      "name": "charmander",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 5,
      "name": "charmeleon",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 6,
      "name": "charizard",
      "types": {
        "first_type": "fire",
        "second_type": "flying"
      }
    },
    {
      "number": 7,
      "name": "squirtle",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 8,
      "name": "wartortle",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 9,
      "name": "blastoise",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 10,
      "name": "caterpie",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 11,
      "name": "metapod",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 12,
      "name": "butterfree",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 13,
      "name": "weedle",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 14,
      "name": "kakuna",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 15,
      "name": "beedrill",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 16,
      "name": "pidgey",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 17,
      "name": "pidgeotto",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 18,
      "name": "pidgeot",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 19,
      "name": "rattata",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 20,
      "name": "raticate",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 21,
      "name": "spearow",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 22,
      "name": "fearow",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 23,
      "name": "ekans",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 24,
      "name": "arbok",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 25,
      "name": "pikachu",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 26,
      "name": "raichu",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 27,
      "name": "sandshrew",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 28,
      "name": "sandslash",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 29,
      "name": "nidoran-f",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 30,
      "name": "nidorina",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 31,
      "name": "nidoqueen",
      "types": {
        "first_type": "poison",
        "second_type": "ground"
      }
    },
    {
      "number": 32,
      "name": "nidoran-m",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 33,
      "name": "nidorino",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 34,
      "name": "nidoking",
      "types": {
        "first_type": "poison",
        "second_type": "ground"
      }
    },
    {
      "number": 35,
      "name": "clefairy",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 36,
      "name": "clefable",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 37,
      "name": "vulpix",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 38,
      "name": "ninetales",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 39,
      "name": "jigglypuff",
      "types": {
        "first_type": "normal",
        "second_type": "fairy"
      }
    },
    {
      "number": 40,
      "name": "wigglytuff",
      "types": {
        "first_type": "normal",
        "second_type": "fairy"
      }
    },
    {
      "number": 41,
      "name": "zubat",
      "types": {
        "first_type": "poison",
        "second_type": "flying"
      }
    },
    {
      "number": 42,
      "name": "golbat",
      "types": {
        "first_type": "poison",
        "second_type": "flying"
      }
    },
    {
      "number": 43,
      "name": "oddish",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 44,
      "name": "gloom",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 45,
      "name": "vileplume",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 46,
      "name": "paras",
      "types": {
        "first_type": "bug",
        "second_type": "grass"
      }
    },
    {
      "number": 47,
      "name": "parasect",
      "types": {
        "first_type": "bug",
        "second_type": "grass"
      }
    },
    {
      "number": 48,
      "name": "venonat",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 49,
      "name": "venomoth",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 50,
      "name": "diglett",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 51,
      "name": "dugtrio",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 52,
      "name": "meowth",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 53,
      "name": "persian",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 54,
      "name": "psyduck",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 55,
      "name": "golduck",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 56,
      "name": "mankey",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 57,
      "name": "primeape",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 58,
      "name": "growlithe",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 59,
      "name": "arcanine",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 60,
      "name": "poliwag",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 61,
      "name": "poliwhirl",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 62,
      "name": "poliwrath",
      "types": {
        "first_type": "water",
        "second_type": "fighting"
      }
    },
    {
      "number": 63,
      "name": "abra",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 64,
      "name": "kadabra",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 65,
      "name": "alakazam",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 66,
      "name": "machop",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 67,
      "name": "machoke",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 68,
      "name": "machamp",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 69,
      "name": "bellsprout",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 70,
      "name": "weepinbell",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 71,
      "name": "victreebel",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 72,
      "name": "tentacool",
      "types": {
        "first_type": "water",
        "second_type": "poison"
      }
    },
    {
      "number": 73,
      "name": "tentacruel",
      "types": {
        "first_type": "water",
        "second_type": "poison"
      }
    },
    {
      "number": 74,
      "name": "geodude",
      "types": {
        "first_type": "rock",
        "second_type": "ground"
      }
    },
    {
      "number": 75,
      "name": "graveler",
      "types": {
        "first_type": "rock",
        "second_type": "ground"
      }
    },
    {
      "number": 76,
      "name": "golem",
      "types": {
        "first_type": "rock",
        "second_type": "ground"
      }
    },
    {
      "number": 77,
      "name": "ponyta",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 78,
      "name": "rapidash",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 79,
      "name": "slowpoke",
      "types": {
        "first_type": "water",
        "second_type": "psychic"
      }
    },
    {
      "number": 80,
      "name": "slowbro",
      "types": {
        "first_type": "water",
        "second_type": "psychic"
      }
    },
    {
      "number": 81,
      "name": "magnemite",
      "types": {
        "first_type": "electric",
        "second_type": "steel"
      }
    },
    {
      "number": 82,
      "name": "magneton",
      "types": {
        "first_type": "electric",
        "second_type": "steel"
      }
    },
    {
      "number": 83,
      "name": "farfetchd",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 84,
      "name": "doduo",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 85,
      "name": "dodrio",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 86,
      "name": "seel",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 87,
      "name": "dewgong",
      "types": {
        "first_type": "water",
        "second_type": "ice"
      }
    },
    {
      "number": 88,
      "name": "grimer",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 89,
      "name": "muk",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 90,
      "name": "shellder",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 91,
      "name": "cloyster",
      "types": {
        "first_type": "water",
        "second_type": "ice"
      }
    },
    {
      "number": 92,
      "name": "gastly",
      "types": {
        "first_type": "ghost",
        "second_type": "poison"
      }
    },
    {
      "number": 93,
      "name": "haunter",
      "types": {
        "first_type": "ghost",
        "second_type": "poison"
      }
    },
    {
      "number": 94,
      "name": "gengar",
      "types": {
        "first_type": "ghost",
        "second_type": "poison"
      }
    },
    {
      "number": 95,
      "name": "onix",
      "types": {
        "first_type": "rock",
        "second_type": "ground"
      }
    },
    {
      "number": 96,
      "name": "drowzee",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 97,
      "name": "hypno",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 98,
      "name": "krabby",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 99,
      "name": "kingler",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 100,
      "name": "voltorb",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 101,
      "name": "electrode",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 102,
      "name": "exeggcute",
      "types": {
        "first_type": "grass",
        "second_type": "psychic"
      }
    },
    {
      "number": 103,
      "name": "exeggutor",
      "types": {
        "first_type": "grass",
        "second_type": "psychic"
      }
    },
    {
      "number": 104,
      "name": "cubone",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 105,
      "name": "marowak",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 106,
      "name": "hitmonlee",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 107,
      "name": "hitmonchan",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 108,
      "name": "lickitung",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 109,
      "name": "koffing",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 110,
      "name": "weezing",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 111,
      "name": "rhyhorn",
      "types": {
        "first_type": "ground",
        "second_type": "rock"
      }
    },
    {
      "number": 112,
      "name": "rhydon",
      "types": {
        "first_type": "ground",
        "second_type": "rock"
      }
    },
    {
      "number": 113,
      "name": "chansey",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 114,
      "name": "tangela",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 115,
      "name": "kangaskhan",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 116,
      "name": "horsea",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 117,
      "name": "seadra",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 118,
      "name": "goldeen",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 119,
      "name": "seaking",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 120,
      "name": "staryu",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 121,
      "name": "starmie",
      "types": {
        "first_type": "water",
        "second_type": "psychic"
      }
    },
    {
      "number": 122,
      "name": "mr-mime",
      "types": {
        "first_type": "psychic",
        "second_type": "fairy"
      }
    },
    {
      "number": 123,
      "name": "scyther",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 124,
      "name": "jynx",
      "types": {
        "first_type": "ice",
        "second_type": "psychic"
      }
    },
    {
      "number": 125,
      "name": "electabuzz",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 126,
      "name": "magmar",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 127,
      "name": "pinsir",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 128,
      "name": "tauros",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 129,
      "name": "magikarp",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 130,
      "name": "gyarados",
      "types": {
        "first_type": "water",
        "second_type": "flying"
      }
    },
    {
      "number": 131,
      "name": "lapras",
      "types": {
        "first_type": "water",
        "second_type": "ice"
      }
    },
    {
      "number": 132,
      "name": "ditto",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 133,
      "name": "eevee",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 134,
      "name": "vaporeon",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 135,
      "name": "jolteon",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 136,
      "name": "flareon",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 137,
      "name": "porygon",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 138,
      "name": "omanyte",
      "types": {
        "first_type": "rock",
        "second_type": "water"
      }
    },
    {
      "number": 139,
      "name": "omastar",
      "types": {
        "first_type": "rock",
        "second_type": "water"
      }
    },
    {
      "number": 140,
      "name": "kabuto",
      "types": {
        "first_type": "rock",
        "second_type": "water"
      }
    },
    {
      "number": 141,
      "name": "kabutops",
      "types": {
        "first_type": "rock",
        "second_type": "water"
      }
    },
    {
      "number": 142,
      "name": "aerodactyl",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 143,
      "name": "snorlax",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 144,
      "name": "articuno",
      "types": {
        "first_type": "ice",
        "second_type": "flying"
      }
    },
    {
      "number": 145,
      "name": "zapdos",
      "types": {
        "first_type": "electric",
        "second_type": "flying"
      }
    },
    {
      "number": 146,
      "name": "moltres",
      "types": {
        "first_type": "fire",
        "second_type": "flying"
      }
    },
    {
      "number": 147,
      "name": "dratini",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 148,
      "name": "dragonair",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 149,
      "name": "dragonite",
      "types": {
        "first_type": "dragon",
        "second_type": "flying"
      }
    },
    {
      "number": 150,
      "name": "mewtwo",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 151,
      "name": "mew",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 152,
      "name": "chikorita",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 153,
      "name": "bayleef",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 154,
      "name": "meganium",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 155,
      "name": "cyndaquil",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 156,
      "name": "quilava",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 157,
      "name": "typhlosion",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 158,
      "name": "totodile",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 159,
      "name": "croconaw",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 160,
      "name": "feraligatr",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 161,
      "name": "sentret",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 162,
      "name": "furret",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 163,
      "name": "hoothoot",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 164,
      "name": "noctowl",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 165,
      "name": "ledyba",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 166,
      "name": "ledian",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 167,
      "name": "spinarak",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 168,
      "name": "ariados",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 169,
      "name": "crobat",
      "types": {
        "first_type": "poison",
        "second_type": "flying"
      }
    },
    {
      "number": 170,
      "name": "chinchou",
      "types": {
        "first_type": "water",
        "second_type": "electric"
      }
    },
    {
      "number": 171,
      "name": "lanturn",
      "types": {
        "first_type": "water",
        "second_type": "electric"
      }
    },
    {
      "number": 172,
      "name": "pichu",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 173,
      "name": "cleffa",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 174,
      "name": "igglybuff",
      "types": {
        "first_type": "normal",
        "second_type": "fairy"
      }
    },
    {
      "number": 175,
      "name": "togepi",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 176,
      "name": "togetic",
      "types": {
        "first_type": "fairy",
        "second_type": "flying"
      }
    },
    {
      "number": 177,
      "name": "natu",
      "types": {
        "first_type": "psychic",
        "second_type": "flying"
      }
    },
    {
      "number": 178,
      "name": "xatu",
      "types": {
        "first_type": "psychic",
        "second_type": "flying"
      }
    },
    {
      "number": 179,
      "name": "mareep",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 180,
      "name": "flaaffy",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 181,
      "name": "ampharos",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 182,
      "name": "bellossom",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 183,
      "name": "marill",
      "types": {
        "first_type": "water",
        "second_type": "fairy"
      }
    },
    {
      "number": 184,
      "name": "azumarill",
      "types": {
        "first_type": "water",
        "second_type": "fairy"
      }
    },
    {
      "number": 185,
      "name": "sudowoodo",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 186,
      "name": "politoed",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 187,
      "name": "hoppip",
      "types": {
        "first_type": "grass",
        "second_type": "flying"
      }
    },
    {
      "number": 188,
      "name": "skiploom",
      "types": {
        "first_type": "grass",
        "second_type": "flying"
      }
    },
    {
      "number": 189,
      "name": "jumpluff",
      "types": {
        "first_type": "grass",
        "second_type": "flying"
      }
    },
    {
      "number": 190,
      "name": "aipom",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 191,
      "name": "sunkern",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 192,
      "name": "sunflora",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 193,
      "name": "yanma",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 194,
      "name": "wooper",
      "types": {
        "first_type": "water",
        "second_type": "ground"
      }
    },
    {
      "number": 195,
      "name": "quagsire",
      "types": {
        "first_type": "water",
        "second_type": "ground"
      }
    },
    {
      "number": 196,
      "name": "espeon",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 197,
      "name": "umbreon",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 198,
      "name": "murkrow",
      "types": {
        "first_type": "dark",
        "second_type": "flying"
      }
    },
    {
      "number": 199,
      "name": "slowking",
      "types": {
        "first_type": "water",
        "second_type": "psychic"
      }
    },
    {
      "number": 200,
      "name": "misdreavus",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 201,
      "name": "unown",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 202,
      "name": "wobbuffet",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 203,
      "name": "girafarig",
      "types": {
        "first_type": "normal",
        "second_type": "psychic"
      }
    },
    {
      "number": 204,
      "name": "pineco",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 205,
      "name": "forretress",
      "types": {
        "first_type": "bug",
        "second_type": "steel"
      }
    },
    {
      "number": 206,
      "name": "dunsparce",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 207,
      "name": "gligar",
      "types": {
        "first_type": "ground",
        "second_type": "flying"
      }
    },
    {
      "number": 208,
      "name": "steelix",
      "types": {
        "first_type": "steel",
        "second_type": "ground"
      }
    },
    {
      "number": 209,
      "name": "snubbull",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 210,
      "name": "granbull",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 211,
      "name": "qwilfish",
      "types": {
        "first_type": "water",
        "second_type": "poison"
      }
    },
    {
      "number": 212,
      "name": "scizor",
      "types": {
        "first_type": "bug",
        "second_type": "steel"
      }
    },
    {
      "number": 213,
      "name": "shuckle",
      "types": {
        "first_type": "bug",
        "second_type": "rock"
      }
    },
    {
      "number": 214,
      "name": "heracross",
      "types": {
        "first_type": "bug",
        "second_type": "fighting"
      }
    },
    {
      "number": 215,
      "name": "sneasel",
      "types": {
        "first_type": "dark",
        "second_type": "ice"
      }
    },
    {
      "number": 216,
      "name": "teddiursa",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 217,
      "name": "ursaring",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 218,
      "name": "slugma",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 219,
      "name": "magcargo",
      "types": {
        "first_type": "fire",
        "second_type": "rock"
      }
    },
    {
      "number": 220,
      "name": "swinub",
      "types": {
        "first_type": "ice",
        "second_type": "ground"
      }
    },
    {
      "number": 221,
      "name": "piloswine",
      "types": {
        "first_type": "ice",
        "second_type": "ground"
      }
    },
    {
      "number": 222,
      "name": "corsola",
      "types": {
        "first_type": "water",
        "second_type": "rock"
      }
    },
    {
      "number": 223,
      "name": "remoraid",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 224,
      "name": "octillery",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 225,
      "name": "delibird",
      "types": {
        "first_type": "ice",
        "second_type": "flying"
      }
    },
    {
      "number": 226,
      "name": "mantine",
      "types": {
        "first_type": "water",
        "second_type": "flying"
      }
    },
    {
      "number": 227,
      "name": "skarmory",
      "types": {
        "first_type": "steel",
        "second_type": "flying"
      }
    },
    {
      "number": 228,
      "name": "houndour",
      "types": {
        "first_type": "dark",
        "second_type": "fire"
      }
    },
    {
      "number": 229,
      "name": "houndoom",
      "types": {
        "first_type": "dark",
        "second_type": "fire"
      }
    },
    {
      "number": 230,
      "name": "kingdra",
      "types": {
        "first_type": "water",
        "second_type": "dragon"
      }
    },
    {
      "number": 231,
      "name": "phanpy",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 232,
      "name": "donphan",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 233,
      "name": "porygon2",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 234,
      "name": "stantler",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 235,
      "name": "smeargle",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 236,
      "name": "tyrogue",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 237,
      "name": "hitmontop",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 238,
      "name": "smoochum",
      "types": {
        "first_type": "ice",
        "second_type": "psychic"
      }
    },
    {
      "number": 239,
      "name": "elekid",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 240,
      "name": "magby",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 241,
      "name": "miltank",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 242,
      "name": "blissey",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 243,
      "name": "raikou",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 244,
      "name": "entei",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 245,
      "name": "suicune",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 246,
      "name": "larvitar",
      "types": {
        "first_type": "rock",
        "second_type": "ground"
      }
    },
    {
      "number": 247,
      "name": "pupitar",
      "types": {
        "first_type": "rock",
        "second_type": "ground"
      }
    },
    {
      "number": 248,
      "name": "tyranitar",
      "types": {
        "first_type": "rock",
        "second_type": "dark"
      }
    },
    {
      "number": 249,
      "name": "lugia",
      "types": {
        "first_type": "psychic",
        "second_type": "flying"
      }
    },
    {
      "number": 250,
      "name": "ho-oh",
      "types": {
        "first_type": "fire",
        "second_type": "flying"
      }
    },
    {
      "number": 251,
      "name": "celebi",
      "types": {
        "first_type": "psychic",
        "second_type": "grass"
      }
    },
    {
      "number": 252,
      "name": "treecko",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 253,
      "name": "grovyle",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 254,
      "name": "sceptile",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 255,
      "name": "torchic",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 256,
      "name": "combusken",
      "types": {
        "first_type": "fire",
        "second_type": "fighting"
      }
    },
    {
      "number": 257,
      "name": "blaziken",
      "types": {
        "first_type": "fire",
        "second_type": "fighting"
      }
    },
    {
      "number": 258,
      "name": "mudkip",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 259,
      "name": "marshtomp",
      "types": {
        "first_type": "water",
        "second_type": "ground"
      }
    },
    {
      "number": 260,
      "name": "swampert",
      "types": {
        "first_type": "water",
        "second_type": "ground"
      }
    },
    {
      "number": 261,
      "name": "poochyena",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 262,
      "name": "mightyena",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 263,
      "name": "zigzagoon",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 264,
      "name": "linoone",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 265,
      "name": "wurmple",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 266,
      "name": "silcoon",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 267,
      "name": "beautifly",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 268,
      "name": "cascoon",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 269,
      "name": "dustox",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 270,
      "name": "lotad",
      "types": {
        "first_type": "water",
        "second_type": "grass"
      }
    },
    {
      "number": 271,
      "name": "lombre",
      "types": {
        "first_type": "water",
        "second_type": "grass"
      }
    },
    {
      "number": 272,
      "name": "ludicolo",
      "types": {
        "first_type": "water",
        "second_type": "grass"
      }
    },
    {
      "number": 273,
      "name": "seedot",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 274,
      "name": "nuzleaf",
      "types": {
        "first_type": "grass",
        "second_type": "dark"
      }
    },
    {
      "number": 275,
      "name": "shiftry",
      "types": {
        "first_type": "grass",
        "second_type": "dark"
      }
    },
    {
      "number": 276,
      "name": "taillow",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 277,
      "name": "swellow",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 278,
      "name": "wingull",
      "types": {
        "first_type": "water",
        "second_type": "flying"
      }
    },
    {
      "number": 279,
      "name": "pelipper",
      "types": {
        "first_type": "water",
        "second_type": "flying"
      }
    },
    {
      "number": 280,
      "name": "ralts",
      "types": {
        "first_type": "psychic",
        "second_type": "fairy"
      }
    },
    {
      "number": 281,
      "name": "kirlia",
      "types": {
        "first_type": "psychic",
        "second_type": "fairy"
      }
    },
    {
      "number": 282,
      "name": "gardevoir",
      "types": {
        "first_type": "psychic",
        "second_type": "fairy"
      }
    },
    {
      "number": 283,
      "name": "surskit",
      "types": {
        "first_type": "bug",
        "second_type": "water"
      }
    },
    {
      "number": 284,
      "name": "masquerain",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 285,
      "name": "shroomish",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 286,
      "name": "breloom",
      "types": {
        "first_type": "grass",
        "second_type": "fighting"
      }
    },
    {
      "number": 287,
      "name": "slakoth",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 288,
      "name": "vigoroth",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 289,
      "name": "slaking",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 290,
      "name": "nincada",
      "types": {
        "first_type": "bug",
        "second_type": "ground"
      }
    },
    {
      "number": 291,
      "name": "ninjask",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 292,
      "name": "shedinja",
      "types": {
        "first_type": "bug",
        "second_type": "ghost"
      }
    },
    {
      "number": 293,
      "name": "whismur",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 294,
      "name": "loudred",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 295,
      "name": "exploud",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 296,
      "name": "makuhita",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 297,
      "name": "hariyama",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 298,
      "name": "azurill",
      "types": {
        "first_type": "normal",
        "second_type": "fairy"
      }
    },
    {
      "number": 299,
      "name": "nosepass",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 300,
      "name": "skitty",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 301,
      "name": "delcatty",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 302,
      "name": "sableye",
      "types": {
        "first_type": "dark",
        "second_type": "ghost"
      }
    },
    {
      "number": 303,
      "name": "mawile",
      "types": {
        "first_type": "steel",
        "second_type": "fairy"
      }
    },
    {
      "number": 304,
      "name": "aron",
      "types": {
        "first_type": "steel",
        "second_type": "rock"
      }
    },
    {
      "number": 305,
      "name": "lairon",
      "types": {
        "first_type": "steel",
        "second_type": "rock"
      }
    },
    {
      "number": 306,
      "name": "aggron",
      "types": {
        "first_type": "steel",
        "second_type": "rock"
      }
    },
    {
      "number": 307,
      "name": "meditite",
      "types": {
        "first_type": "fighting",
        "second_type": "psychic"
      }
    },
    {
      "number": 308,
      "name": "medicham",
      "types": {
        "first_type": "fighting",
        "second_type": "psychic"
      }
    },
    {
      "number": 309,
      "name": "electrike",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 310,
      "name": "manectric",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 311,
      "name": "plusle",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 312,
      "name": "minun",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 313,
      "name": "volbeat",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 314,
      "name": "illumise",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 315,
      "name": "roselia",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 316,
      "name": "gulpin",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 317,
      "name": "swalot",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 318,
      "name": "carvanha",
      "types": {
        "first_type": "water",
        "second_type": "dark"
      }
    },
    {
      "number": 319,
      "name": "sharpedo",
      "types": {
        "first_type": "water",
        "second_type": "dark"
      }
    },
    {
      "number": 320,
      "name": "wailmer",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 321,
      "name": "wailord",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 322,
      "name": "numel",
      "types": {
        "first_type": "fire",
        "second_type": "ground"
      }
    },
    {
      "number": 323,
      "name": "camerupt",
      "types": {
        "first_type": "fire",
        "second_type": "ground"
      }
    },
    {
      "number": 324,
      "name": "torkoal",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 325,
      "name": "spoink",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 326,
      "name": "grumpig",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 327,
      "name": "spinda",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 328,
      "name": "trapinch",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 329,
      "name": "vibrava",
      "types": {
        "first_type": "ground",
        "second_type": "dragon"
      }
    },
    {
      "number": 330,
      "name": "flygon",
      "types": {
        "first_type": "ground",
        "second_type": "dragon"
      }
    },
    {
      "number": 331,
      "name": "cacnea",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 332,
      "name": "cacturne",
      "types": {
        "first_type": "grass",
        "second_type": "dark"
      }
    },
    {
      "number": 333,
      "name": "swablu",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 334,
      "name": "altaria",
      "types": {
        "first_type": "dragon",
        "second_type": "flying"
      }
    },
    {
      "number": 335,
      "name": "zangoose",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 336,
      "name": "seviper",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 337,
      "name": "lunatone",
      "types": {
        "first_type": "rock",
        "second_type": "psychic"
      }
    },
    {
      "number": 338,
      "name": "solrock",
      "types": {
        "first_type": "rock",
        "second_type": "psychic"
      }
    },
    {
      "number": 339,
      "name": "barboach",
      "types": {
        "first_type": "water",
        "second_type": "ground"
      }
    },
    {
      "number": 340,
      "name": "whiscash",
      "types": {
        "first_type": "water",
        "second_type": "ground"
      }
    },
    {
      "number": 341,
      "name": "corphish",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 342,
      "name": "crawdaunt",
      "types": {
        "first_type": "water",
        "second_type": "dark"
      }
    },
    {
      "number": 343,
      "name": "baltoy",
      "types": {
        "first_type": "ground",
        "second_type": "psychic"
      }
    },
    {
      "number": 344,
      "name": "claydol",
      "types": {
        "first_type": "ground",
        "second_type": "psychic"
      }
    },
    {
      "number": 345,
      "name": "lileep",
      "types": {
        "first_type": "rock",
        "second_type": "grass"
      }
    },
    {
      "number": 346,
      "name": "cradily",
      "types": {
        "first_type": "rock",
        "second_type": "grass"
      }
    },
    {
      "number": 347,
      "name": "anorith",
      "types": {
        "first_type": "rock",
        "second_type": "bug"
      }
    },
    {
      "number": 348,
      "name": "armaldo",
      "types": {
        "first_type": "rock",
        "second_type": "bug"
      }
    },
    {
      "number": 349,
      "name": "feebas",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 350,
      "name": "milotic",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 351,
      "name": "castform",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 352,
      "name": "kecleon",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 353,
      "name": "shuppet",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 354,
      "name": "banette",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 355,
      "name": "duskull",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 356,
      "name": "dusclops",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 357,
      "name": "tropius",
      "types": {
        "first_type": "grass",
        "second_type": "flying"
      }
    },
    {
      "number": 358,
      "name": "chimecho",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 359,
      "name": "absol",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 360,
      "name": "wynaut",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 361,
      "name": "snorunt",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 362,
      "name": "glalie",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 363,
      "name": "spheal",
      "types": {
        "first_type": "ice",
        "second_type": "water"
      }
    },
    {
      "number": 364,
      "name": "sealeo",
      "types": {
        "first_type": "ice",
        "second_type": "water"
      }
    },
    {
      "number": 365,
      "name": "walrein",
      "types": {
        "first_type": "ice",
        "second_type": "water"
      }
    },
    {
      "number": 366,
      "name": "clamperl",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 367,
      "name": "huntail",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 368,
      "name": "gorebyss",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 369,
      "name": "relicanth",
      "types": {
        "first_type": "water",
        "second_type": "rock"
      }
    },
    {
      "number": 370,
      "name": "luvdisc",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 371,
      "name": "bagon",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 372,
      "name": "shelgon",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 373,
      "name": "salamence",
      "types": {
        "first_type": "dragon",
        "second_type": "flying"
      }
    },
    {
      "number": 374,
      "name": "beldum",
      "types": {
        "first_type": "steel",
        "second_type": "psychic"
      }
    },
    {
      "number": 375,
      "name": "metang",
      "types": {
        "first_type": "steel",
        "second_type": "psychic"
      }
    },
    {
      "number": 376,
      "name": "metagross",
      "types": {
        "first_type": "steel",
        "second_type": "psychic"
      }
    },
    {
      "number": 377,
      "name": "regirock",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 378,
      "name": "regice",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 379,
      "name": "registeel",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 380,
      "name": "latias",
      "types": {
        "first_type": "dragon",
        "second_type": "psychic"
      }
    },
    {
      "number": 381,
      "name": "latios",
      "types": {
        "first_type": "dragon",
        "second_type": "psychic"
      }
    },
    {
      "number": 382,
      "name": "kyogre",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 383,
      "name": "groudon",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 384,
      "name": "rayquaza",
      "types": {
        "first_type": "dragon",
        "second_type": "flying"
      }
    },
    {
      "number": 385,
      "name": "jirachi",
      "types": {
        "first_type": "steel",
        "second_type": "psychic"
      }
    },
    {
      "number": 386,
      "name": "deoxys-normal",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 387,
      "name": "turtwig",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 388,
      "name": "grotle",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 389,
      "name": "torterra",
      "types": {
        "first_type": "grass",
        "second_type": "ground"
      }
    },
    {
      "number": 390,
      "name": "chimchar",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 391,
      "name": "monferno",
      "types": {
        "first_type": "fire",
        "second_type": "fighting"
      }
    },
    {
      "number": 392,
      "name": "infernape",
      "types": {
        "first_type": "fire",
        "second_type": "fighting"
      }
    },
    {
      "number": 393,
      "name": "piplup",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 394,
      "name": "prinplup",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 395,
      "name": "empoleon",
      "types": {
        "first_type": "water",
        "second_type": "steel"
      }
    },
    {
      "number": 396,
      "name": "starly",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 397,
      "name": "staravia",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 398,
      "name": "staraptor",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 399,
      "name": "bidoof",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 400,
      "name": "bibarel",
      "types": {
        "first_type": "normal",
        "second_type": "water"
      }
    },
    {
      "number": 401,
      "name": "kricketot",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 402,
      "name": "kricketune",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 403,
      "name": "shinx",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 404,
      "name": "luxio",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 405,
      "name": "luxray",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 406,
      "name": "budew",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 407,
      "name": "roserade",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 408,
      "name": "cranidos",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 409,
      "name": "rampardos",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 410,
      "name": "shieldon",
      "types": {
        "first_type": "rock",
        "second_type": "steel"
      }
    },
    {
      "number": 411,
      "name": "bastiodon",
      "types": {
        "first_type": "rock",
        "second_type": "steel"
      }
    },
    {
      "number": 412,
      "name": "burmy",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 413,
      "name": "wormadam-plant",
      "types": {
        "first_type": "bug",
        "second_type": "grass"
      }
    },
    {
      "number": 414,
      "name": "mothim",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 415,
      "name": "combee",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 416,
      "name": "vespiquen",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 417,
      "name": "pachirisu",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 418,
      "name": "buizel",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 419,
      "name": "floatzel",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 420,
      "name": "cherubi",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 421,
      "name": "cherrim",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 422,
      "name": "shellos",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 423,
      "name": "gastrodon",
      "types": {
        "first_type": "water",
        "second_type": "ground"
      }
    },
    {
      "number": 424,
      "name": "ambipom",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 425,
      "name": "drifloon",
      "types": {
        "first_type": "ghost",
        "second_type": "flying"
      }
    },
    {
      "number": 426,
      "name": "drifblim",
      "types": {
        "first_type": "ghost",
        "second_type": "flying"
      }
    },
    {
      "number": 427,
      "name": "buneary",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 428,
      "name": "lopunny",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 429,
      "name": "mismagius",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 430,
      "name": "honchkrow",
      "types": {
        "first_type": "dark",
        "second_type": "flying"
      }
    },
    {
      "number": 431,
      "name": "glameow",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 432,
      "name": "purugly",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 433,
      "name": "chingling",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 434,
      "name": "stunky",
      "types": {
        "first_type": "poison",
        "second_type": "dark"
      }
    },
    {
      "number": 435,
      "name": "skuntank",
      "types": {
        "first_type": "poison",
        "second_type": "dark"
      }
    },
    {
      "number": 436,
      "name": "bronzor",
      "types": {
        "first_type": "steel",
        "second_type": "psychic"
      }
    },
    {
      "number": 437,
      "name": "bronzong",
      "types": {
        "first_type": "steel",
        "second_type": "psychic"
      }
    },
    {
      "number": 438,
      "name": "bonsly",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 439,
      "name": "mime-jr",
      "types": {
        "first_type": "psychic",
        "second_type": "fairy"
      }
    },
    {
      "number": 440,
      "name": "happiny",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 441,
      "name": "chatot",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 442,
      "name": "spiritomb",
      "types": {
        "first_type": "ghost",
        "second_type": "dark"
      }
    },
    {
      "number": 443,
      "name": "gible",
      "types": {
        "first_type": "dragon",
        "second_type": "ground"
      }
    },
    {
      "number": 444,
      "name": "gabite",
      "types": {
        "first_type": "dragon",
        "second_type": "ground"
      }
    },
    {
      "number": 445,
      "name": "garchomp",
      "types": {
        "first_type": "dragon",
        "second_type": "ground"
      }
    },
    {
      "number": 446,
      "name": "munchlax",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 447,
      "name": "riolu",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 448,
      "name": "lucario",
      "types": {
        "first_type": "fighting",
        "second_type": "steel"
      }
    },
    {
      "number": 449,
      "name": "hippopotas",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 450,
      "name": "hippowdon",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 451,
      "name": "skorupi",
      "types": {
        "first_type": "poison",
        "second_type": "bug"
      }
    },
    {
      "number": 452,
      "name": "drapion",
      "types": {
        "first_type": "poison",
        "second_type": "dark"
      }
    },
    {
      "number": 453,
      "name": "croagunk",
      "types": {
        "first_type": "poison",
        "second_type": "fighting"
      }
    },
    {
      "number": 454,
      "name": "toxicroak",
      "types": {
        "first_type": "poison",
        "second_type": "fighting"
      }
    },
    {
      "number": 455,
      "name": "carnivine",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 456,
      "name": "finneon",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 457,
      "name": "lumineon",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 458,
      "name": "mantyke",
      "types": {
        "first_type": "water",
        "second_type": "flying"
      }
    },
    {
      "number": 459,
      "name": "snover",
      "types": {
        "first_type": "grass",
        "second_type": "ice"
      }
    },
    {
      "number": 460,
      "name": "abomasnow",
      "types": {
        "first_type": "grass",
        "second_type": "ice"
      }
    },
    {
      "number": 461,
      "name": "weavile",
      "types": {
        "first_type": "dark",
        "second_type": "ice"
      }
    },
    {
      "number": 462,
      "name": "magnezone",
      "types": {
        "first_type": "electric",
        "second_type": "steel"
      }
    },
    {
      "number": 463,
      "name": "lickilicky",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 464,
      "name": "rhyperior",
      "types": {
        "first_type": "ground",
        "second_type": "rock"
      }
    },
    {
      "number": 465,
      "name": "tangrowth",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 466,
      "name": "electivire",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 467,
      "name": "magmortar",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 468,
      "name": "togekiss",
      "types": {
        "first_type": "fairy",
        "second_type": "flying"
      }
    },
    {
      "number": 469,
      "name": "yanmega",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 470,
      "name": "leafeon",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 471,
      "name": "glaceon",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 472,
      "name": "gliscor",
      "types": {
        "first_type": "ground",
        "second_type": "flying"
      }
    },
    {
      "number": 473,
      "name": "mamoswine",
      "types": {
        "first_type": "ice",
        "second_type": "ground"
      }
    },
    {
      "number": 474,
      "name": "porygon-z",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 475,
      "name": "gallade",
      "types": {
        "first_type": "psychic",
        "second_type": "fighting"
      }
    },
    {
      "number": 476,
      "name": "probopass",
      "types": {
        "first_type": "rock",
        "second_type": "steel"
      }
    },
    {
      "number": 477,
      "name": "dusknoir",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 478,
      "name": "froslass",
      "types": {
        "first_type": "ice",
        "second_type": "ghost"
      }
    },
    {
      "number": 479,
      "name": "rotom",
      "types": {
        "first_type": "electric",
        "second_type": "ghost"
      }
    },
    {
      "number": 480,
      "name": "uxie",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 481,
      "name": "mesprit",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 482,
      "name": "azelf",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 483,
      "name": "dialga",
      "types": {
        "first_type": "steel",
        "second_type": "dragon"
      }
    },
    {
      "number": 484,
      "name": "palkia",
      "types": {
        "first_type": "water",
        "second_type": "dragon"
      }
    },
    {
      "number": 485,
      "name": "heatran",
      "types": {
        "first_type": "fire",
        "second_type": "steel"
      }
    },
    {
      "number": 486,
      "name": "regigigas",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 487,
      "name": "giratina-altered",
      "types": {
        "first_type": "ghost",
        "second_type": "dragon"
      }
    },
    {
      "number": 488,
      "name": "cresselia",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 489,
      "name": "phione",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 490,
      "name": "manaphy",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 491,
      "name": "darkrai",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 492,
      "name": "shaymin-land",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 493,
      "name": "arceus",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 494,
      "name": "victini",
      "types": {
        "first_type": "psychic",
        "second_type": "fire"
      }
    },
    {
      "number": 495,
      "name": "snivy",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 496,
      "name": "servine",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 497,
      "name": "serperior",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 498,
      "name": "tepig",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 499,
      "name": "pignite",
      "types": {
        "first_type": "fire",
        "second_type": "fighting"
      }
    },
    {
      "number": 500,
      "name": "emboar",
      "types": {
        "first_type": "fire",
        "second_type": "fighting"
      }
    },
    {
      "number": 501,
      "name": "oshawott",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 502,
      "name": "dewott",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 503,
      "name": "samurott",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 504,
      "name": "patrat",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 505,
      "name": "watchog",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 506,
      "name": "lillipup",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 507,
      "name": "herdier",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 508,
      "name": "stoutland",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 509,
      "name": "purrloin",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 510,
      "name": "liepard",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 511,
      "name": "pansage",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 512,
      "name": "simisage",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 513,
      "name": "pansear",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 514,
      "name": "simisear",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 515,
      "name": "panpour",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 516,
      "name": "simipour",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 517,
      "name": "munna",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 518,
      "name": "musharna",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 519,
      "name": "pidove",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 520,
      "name": "tranquill",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 521,
      "name": "unfezant",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 522,
      "name": "blitzle",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 523,
      "name": "zebstrika",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 524,
      "name": "roggenrola",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 525,
      "name": "boldore",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 526,
      "name": "gigalith",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 527,
      "name": "woobat",
      "types": {
        "first_type": "psychic",
        "second_type": "flying"
      }
    },
    {
      "number": 528,
      "name": "swoobat",
      "types": {
        "first_type": "psychic",
        "second_type": "flying"
      }
    },
    {
      "number": 529,
      "name": "drilbur",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 530,
      "name": "excadrill",
      "types": {
        "first_type": "ground",
        "second_type": "steel"
      }
    },
    {
      "number": 531,
      "name": "audino",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 532,
      "name": "timburr",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 533,
      "name": "gurdurr",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 534,
      "name": "conkeldurr",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 535,
      "name": "tympole",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 536,
      "name": "palpitoad",
      "types": {
        "first_type": "water",
        "second_type": "ground"
      }
    },
    {
      "number": 537,
      "name": "seismitoad",
      "types": {
        "first_type": "water",
        "second_type": "ground"
      }
    },
    {
      "number": 538,
      "name": "throh",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 539,
      "name": "sawk",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 540,
      "name": "sewaddle",
      "types": {
        "first_type": "bug",
        "second_type": "grass"
      }
    },
    {
      "number": 541,
      "name": "swadloon",
      "types": {
        "first_type": "bug",
        "second_type": "grass"
      }
    },
    {
      "number": 542,
      "name": "leavanny",
      "types": {
        "first_type": "bug",
        "second_type": "grass"
      }
    },
    {
      "number": 543,
      "name": "venipede",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 544,
      "name": "whirlipede",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 545,
      "name": "scolipede",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 546,
      "name": "cottonee",
      "types": {
        "first_type": "grass",
        "second_type": "fairy"
      }
    },
    {
      "number": 547,
      "name": "whimsicott",
      "types": {
        "first_type": "grass",
        "second_type": "fairy"
      }
    },
    {
      "number": 548,
      "name": "petilil",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 549,
      "name": "lilligant",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 550,
      "name": "basculin-red-striped",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 551,
      "name": "sandile",
      "types": {
        "first_type": "ground",
        "second_type": "dark"
      }
    },
    {
      "number": 552,
      "name": "krokorok",
      "types": {
        "first_type": "ground",
        "second_type": "dark"
      }
    },
    {
      "number": 553,
      "name": "krookodile",
      "types": {
        "first_type": "ground",
        "second_type": "dark"
      }
    },
    {
      "number": 554,
      "name": "darumaka",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 555,
      "name": "darmanitan-standard",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 556,
      "name": "maractus",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 557,
      "name": "dwebble",
      "types": {
        "first_type": "bug",
        "second_type": "rock"
      }
    },
    {
      "number": 558,
      "name": "crustle",
      "types": {
        "first_type": "bug",
        "second_type": "rock"
      }
    },
    {
      "number": 559,
      "name": "scraggy",
      "types": {
        "first_type": "dark",
        "second_type": "fighting"
      }
    },
    {
      "number": 560,
      "name": "scrafty",
      "types": {
        "first_type": "dark",
        "second_type": "fighting"
      }
    },
    {
      "number": 561,
      "name": "sigilyph",
      "types": {
        "first_type": "psychic",
        "second_type": "flying"
      }
    },
    {
      "number": 562,
      "name": "yamask",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 563,
      "name": "cofagrigus",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 564,
      "name": "tirtouga",
      "types": {
        "first_type": "water",
        "second_type": "rock"
      }
    },
    {
      "number": 565,
      "name": "carracosta",
      "types": {
        "first_type": "water",
        "second_type": "rock"
      }
    },
    {
      "number": 566,
      "name": "archen",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 567,
      "name": "archeops",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 568,
      "name": "trubbish",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 569,
      "name": "garbodor",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 570,
      "name": "zorua",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 571,
      "name": "zoroark",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 572,
      "name": "minccino",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 573,
      "name": "cinccino",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 574,
      "name": "gothita",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 575,
      "name": "gothorita",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 576,
      "name": "gothitelle",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 577,
      "name": "solosis",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 578,
      "name": "duosion",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 579,
      "name": "reuniclus",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 580,
      "name": "ducklett",
      "types": {
        "first_type": "water",
        "second_type": "flying"
      }
    },
    {
      "number": 581,
      "name": "swanna",
      "types": {
        "first_type": "water",
        "second_type": "flying"
      }
    },
    {
      "number": 582,
      "name": "vanillite",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 583,
      "name": "vanillish",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 584,
      "name": "vanilluxe",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 585,
      "name": "deerling",
      "types": {
        "first_type": "normal",
        "second_type": "grass"
      }
    },
    {
      "number": 586,
      "name": "sawsbuck",
      "types": {
        "first_type": "normal",
        "second_type": "grass"
      }
    },
    {
      "number": 587,
      "name": "emolga",
      "types": {
        "first_type": "electric",
        "second_type": "flying"
      }
    },
    {
      "number": 588,
      "name": "karrablast",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 589,
      "name": "escavalier",
      "types": {
        "first_type": "bug",
        "second_type": "steel"
      }
    },
    {
      "number": 590,
      "name": "foongus",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 591,
      "name": "amoonguss",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 592,
      "name": "frillish",
      "types": {
        "first_type": "water",
        "second_type": "ghost"
      }
    },
    {
      "number": 593,
      "name": "jellicent",
      "types": {
        "first_type": "water",
        "second_type": "ghost"
      }
    },
    {
      "number": 594,
      "name": "alomomola",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 595,
      "name": "joltik",
      "types": {
        "first_type": "bug",
        "second_type": "electric"
      }
    },
    {
      "number": 596,
      "name": "galvantula",
      "types": {
        "first_type": "bug",
        "second_type": "electric"
      }
    },
    {
      "number": 597,
      "name": "ferroseed",
      "types": {
        "first_type": "grass",
        "second_type": "steel"
      }
    },
    {
      "number": 598,
      "name": "ferrothorn",
      "types": {
        "first_type": "grass",
        "second_type": "steel"
      }
    },
    {
      "number": 599,
      "name": "klink",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 600,
      "name": "klang",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 601,
      "name": "klinklang",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 602,
      "name": "tynamo",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 603,
      "name": "eelektrik",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 604,
      "name": "eelektross",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 605,
      "name": "elgyem",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 606,
      "name": "beheeyem",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 607,
      "name": "litwick",
      "types": {
        "first_type": "ghost",
        "second_type": "fire"
      }
    },
    {
      "number": 608,
      "name": "lampent",
      "types": {
        "first_type": "ghost",
        "second_type": "fire"
      }
    },
    {
      "number": 609,
      "name": "chandelure",
      "types": {
        "first_type": "ghost",
        "second_type": "fire"
      }
    },
    {
      "number": 610,
      "name": "axew",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 611,
      "name": "fraxure",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 612,
      "name": "haxorus",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 613,
      "name": "cubchoo",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 614,
      "name": "beartic",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 615,
      "name": "cryogonal",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 616,
      "name": "shelmet",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 617,
      "name": "accelgor",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 618,
      "name": "stunfisk",
      "types": {
        "first_type": "ground",
        "second_type": "electric"
      }
    },
    {
      "number": 619,
      "name": "mienfoo",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 620,
      "name": "mienshao",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 621,
      "name": "druddigon",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 622,
      "name": "golett",
      "types": {
        "first_type": "ground",
        "second_type": "ghost"
      }
    },
    {
      "number": 623,
      "name": "golurk",
      "types": {
        "first_type": "ground",
        "second_type": "ghost"
      }
    },
    {
      "number": 624,
      "name": "pawniard",
      "types": {
        "first_type": "dark",
        "second_type": "steel"
      }
    },
    {
      "number": 625,
      "name": "bisharp",
      "types": {
        "first_type": "dark",
        "second_type": "steel"
      }
    },
    {
      "number": 626,
      "name": "bouffalant",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 627,
      "name": "rufflet",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 628,
      "name": "braviary",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 629,
      "name": "vullaby",
      "types": {
        "first_type": "dark",
        "second_type": "flying"
      }
    },
    {
      "number": 630,
      "name": "mandibuzz",
      "types": {
        "first_type": "dark",
        "second_type": "flying"
      }
    },
    {
      "number": 631,
      "name": "heatmor",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 632,
      "name": "durant",
      "types": {
        "first_type": "bug",
        "second_type": "steel"
      }
    },
    {
      "number": 633,
      "name": "deino",
      "types": {
        "first_type": "dark",
        "second_type": "dragon"
      }
    },
    {
      "number": 634,
      "name": "zweilous",
      "types": {
        "first_type": "dark",
        "second_type": "dragon"
      }
    },
    {
      "number": 635,
      "name": "hydreigon",
      "types": {
        "first_type": "dark",
        "second_type": "dragon"
      }
    },
    {
      "number": 636,
      "name": "larvesta",
      "types": {
        "first_type": "bug",
        "second_type": "fire"
      }
    },
    {
      "number": 637,
      "name": "volcarona",
      "types": {
        "first_type": "bug",
        "second_type": "fire"
      }
    },
    {
      "number": 638,
      "name": "cobalion",
      "types": {
        "first_type": "steel",
        "second_type": "fighting"
      }
    },
    {
      "number": 639,
      "name": "terrakion",
      "types": {
        "first_type": "rock",
        "second_type": "fighting"
      }
    },
    {
      "number": 640,
      "name": "virizion",
      "types": {
        "first_type": "grass",
        "second_type": "fighting"
      }
    },
    {
      "number": 641,
      "name": "tornadus-incarnate",
      "types": {
        "first_type": "flying",
        "second_type": null
      }
    },
    {
      "number": 642,
      "name": "thundurus-incarnate",
      "types": {
        "first_type": "electric",
        "second_type": "flying"
      }
    },
    {
      "number": 643,
      "name": "reshiram",
      "types": {
        "first_type": "dragon",
        "second_type": "fire"
      }
    },
    {
      "number": 644,
      "name": "zekrom",
      "types": {
        "first_type": "dragon",
        "second_type": "electric"
      }
    },
    {
      "number": 645,
      "name": "landorus-incarnate",
      "types": {
        "first_type": "ground",
        "second_type": "flying"
      }
    },
    {
      "number": 646,
      "name": "kyurem",
      "types": {
        "first_type": "dragon",
        "second_type": "ice"
      }
    },
    {
      "number": 647,
      "name": "keldeo-ordinary",
      "types": {
        "first_type": "water",
        "second_type": "fighting"
      }
    },
    {
      "number": 648,
      "name": "meloetta-aria",
      "types": {
        "first_type": "normal",
        "second_type": "psychic"
      }
    },
    {
      "number": 649,
      "name": "genesect",
      "types": {
        "first_type": "bug",
        "second_type": "steel"
      }
    },
    {
      "number": 650,
      "name": "chespin",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 651,
      "name": "quilladin",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 652,
      "name": "chesnaught",
      "types": {
        "first_type": "grass",
        "second_type": "fighting"
      }
    },
    {
      "number": 653,
      "name": "fennekin",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 654,
      "name": "braixen",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 655,
      "name": "delphox",
      "types": {
        "first_type": "fire",
        "second_type": "psychic"
      }
    },
    {
      "number": 656,
      "name": "froakie",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 657,
      "name": "frogadier",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 658,
      "name": "greninja",
      "types": {
        "first_type": "water",
        "second_type": "dark"
      }
    },
    {
      "number": 659,
      "name": "bunnelby",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 660,
      "name": "diggersby",
      "types": {
        "first_type": "normal",
        "second_type": "ground"
      }
    },
    {
      "number": 661,
      "name": "fletchling",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 662,
      "name": "fletchinder",
      "types": {
        "first_type": "fire",
        "second_type": "flying"
      }
    },
    {
      "number": 663,
      "name": "talonflame",
      "types": {
        "first_type": "fire",
        "second_type": "flying"
      }
    },
    {
      "number": 664,
      "name": "scatterbug",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 665,
      "name": "spewpa",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 666,
      "name": "vivillon",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 667,
      "name": "litleo",
      "types": {
        "first_type": "fire",
        "second_type": "normal"
      }
    },
    {
      "number": 668,
      "name": "pyroar",
      "types": {
        "first_type": "fire",
        "second_type": "normal"
      }
    },
    {
      "number": 669,
      "name": "flabebe",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 670,
      "name": "floette",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 671,
      "name": "florges",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 672,
      "name": "skiddo",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 673,
      "name": "gogoat",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 674,
      "name": "pancham",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 675,
      "name": "pangoro",
      "types": {
        "first_type": "fighting",
        "second_type": "dark"
      }
    },
    {
      "number": 676,
      "name": "furfrou",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 677,
      "name": "espurr",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 678,
      "name": "meowstic-male",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 679,
      "name": "honedge",
      "types": {
        "first_type": "steel",
        "second_type": "ghost"
      }
    },
    {
      "number": 680,
      "name": "doublade",
      "types": {
        "first_type": "steel",
        "second_type": "ghost"
      }
    },
    {
      "number": 681,
      "name": "aegislash-shield",
      "types": {
        "first_type": "steel",
        "second_type": "ghost"
      }
    },
    {
      "number": 682,
      "name": "spritzee",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 683,
      "name": "aromatisse",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 684,
      "name": "swirlix",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 685,
      "name": "slurpuff",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 686,
      "name": "inkay",
      "types": {
        "first_type": "dark",
        "second_type": "psychic"
      }
    },
    {
      "number": 687,
      "name": "malamar",
      "types": {
        "first_type": "dark",
        "second_type": "psychic"
      }
    },
    {
      "number": 688,
      "name": "binacle",
      "types": {
        "first_type": "rock",
        "second_type": "water"
      }
    },
    {
      "number": 689,
      "name": "barbaracle",
      "types": {
        "first_type": "rock",
        "second_type": "water"
      }
    },
    {
      "number": 690,
      "name": "skrelp",
      "types": {
        "first_type": "poison",
        "second_type": "water"
      }
    },
    {
      "number": 691,
      "name": "dragalge",
      "types": {
        "first_type": "poison",
        "second_type": "dragon"
      }
    },
    {
      "number": 692,
      "name": "clauncher",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 693,
      "name": "clawitzer",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 694,
      "name": "helioptile",
      "types": {
        "first_type": "electric",
        "second_type": "normal"
      }
    },
    {
      "number": 695,
      "name": "heliolisk",
      "types": {
        "first_type": "electric",
        "second_type": "normal"
      }
    },
    {
      "number": 696,
      "name": "tyrunt",
      "types": {
        "first_type": "rock",
        "second_type": "dragon"
      }
    },
    {
      "number": 697,
      "name": "tyrantrum",
      "types": {
        "first_type": "rock",
        "second_type": "dragon"
      }
    },
    {
      "number": 698,
      "name": "amaura",
      "types": {
        "first_type": "rock",
        "second_type": "ice"
      }
    },
    {
      "number": 699,
      "name": "aurorus",
      "types": {
        "first_type": "rock",
        "second_type": "ice"
      }
    },
    {
      "number": 700,
      "name": "sylveon",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 701,
      "name": "hawlucha",
      "types": {
        "first_type": "fighting",
        "second_type": "flying"
      }
    },
    {
      "number": 702,
      "name": "dedenne",
      "types": {
        "first_type": "electric",
        "second_type": "fairy"
      }
    },
    {
      "number": 703,
      "name": "carbink",
      "types": {
        "first_type": "rock",
        "second_type": "fairy"
      }
    },
    {
      "number": 704,
      "name": "goomy",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 705,
      "name": "sliggoo",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 706,
      "name": "goodra",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 707,
      "name": "klefki",
      "types": {
        "first_type": "steel",
        "second_type": "fairy"
      }
    },
    {
      "number": 708,
      "name": "phantump",
      "types": {
        "first_type": "ghost",
        "second_type": "grass"
      }
    },
    {
      "number": 709,
      "name": "trevenant",
      "types": {
        "first_type": "ghost",
        "second_type": "grass"
      }
    },
    {
      "number": 710,
      "name": "pumpkaboo-average",
      "types": {
        "first_type": "ghost",
        "second_type": "grass"
      }
    },
    {
      "number": 711,
      "name": "gourgeist-average",
      "types": {
        "first_type": "ghost",
        "second_type": "grass"
      }
    },
    {
      "number": 712,
      "name": "bergmite",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 713,
      "name": "avalugg",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 714,
      "name": "noibat",
      "types": {
        "first_type": "flying",
        "second_type": "dragon"
      }
    },
    {
      "number": 715,
      "name": "noivern",
      "types": {
        "first_type": "flying",
        "second_type": "dragon"
      }
    },
    {
      "number": 716,
      "name": "xerneas",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 717,
      "name": "yveltal",
      "types": {
        "first_type": "dark",
        "second_type": "flying"
      }
    },
    {
      "number": 718,
      "name": "zygarde-50",
      "types": {
        "first_type": "dragon",
        "second_type": "ground"
      }
    },
    {
      "number": 719,
      "name": "diancie",
      "types": {
        "first_type": "rock",
        "second_type": "fairy"
      }
    },
    {
      "number": 720,
      "name": "hoopa",
      "types": {
        "first_type": "psychic",
        "second_type": "ghost"
      }
    },
    {
      "number": 721,
      "name": "volcanion",
      "types": {
        "first_type": "fire",
        "second_type": "water"
      }
    },
    {
      "number": 722,
      "name": "rowlet",
      "types": {
        "first_type": "grass",
        "second_type": "flying"
      }
    },
    {
      "number": 723,
      "name": "dartrix",
      "types": {
        "first_type": "grass",
        "second_type": "flying"
      }
    },
    {
      "number": 724,
      "name": "decidueye",
      "types": {
        "first_type": "grass",
        "second_type": "ghost"
      }
    },
    {
      "number": 725,
      "name": "litten",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 726,
      "name": "torracat",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 727,
      "name": "incineroar",
      "types": {
        "first_type": "fire",
        "second_type": "dark"
      }
    },
    {
      "number": 728,
      "name": "popplio",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 729,
      "name": "brionne",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 730,
      "name": "primarina",
      "types": {
        "first_type": "water",
        "second_type": "fairy"
      }
    },
    {
      "number": 731,
      "name": "pikipek",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 732,
      "name": "trumbeak",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 733,
      "name": "toucannon",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 734,
      "name": "yungoos",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 735,
      "name": "gumshoos",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 736,
      "name": "grubbin",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 737,
      "name": "charjabug",
      "types": {
        "first_type": "bug",
        "second_type": "electric"
      }
    },
    {
      "number": 738,
      "name": "vikavolt",
      "types": {
        "first_type": "bug",
        "second_type": "electric"
      }
    },
    {
      "number": 739,
      "name": "crabrawler",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 740,
      "name": "crabominable",
      "types": {
        "first_type": "fighting",
        "second_type": "ice"
      }
    },
    {
      "number": 741,
      "name": "oricorio-baile",
      "types": {
        "first_type": "fire",
        "second_type": "flying"
      }
    },
    {
      "number": 742,
      "name": "cutiefly",
      "types": {
        "first_type": "bug",
        "second_type": "fairy"
      }
    },
    {
      "number": 743,
      "name": "ribombee",
      "types": {
        "first_type": "bug",
        "second_type": "fairy"
      }
    },
    {
      "number": 744,
      "name": "rockruff",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 745,
      "name": "lycanroc-midday",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 746,
      "name": "wishiwashi-solo",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 747,
      "name": "mareanie",
      "types": {
        "first_type": "poison",
        "second_type": "water"
      }
    },
    {
      "number": 748,
      "name": "toxapex",
      "types": {
        "first_type": "poison",
        "second_type": "water"
      }
    },
    {
      "number": 749,
      "name": "mudbray",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 750,
      "name": "mudsdale",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 751,
      "name": "dewpider",
      "types": {
        "first_type": "water",
        "second_type": "bug"
      }
    },
    {
      "number": 752,
      "name": "araquanid",
      "types": {
        "first_type": "water",
        "second_type": "bug"
      }
    },
    {
      "number": 753,
      "name": "fomantis",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 754,
      "name": "lurantis",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 755,
      "name": "morelull",
      "types": {
        "first_type": "grass",
        "second_type": "fairy"
      }
    },
    {
      "number": 756,
      "name": "shiinotic",
      "types": {
        "first_type": "grass",
        "second_type": "fairy"
      }
    },
    {
      "number": 757,
      "name": "salandit",
      "types": {
        "first_type": "poison",
        "second_type": "fire"
      }
    },
    {
      "number": 758,
      "name": "salazzle",
      "types": {
        "first_type": "poison",
        "second_type": "fire"
      }
    },
    {
      "number": 759,
      "name": "stufful",
      "types": {
        "first_type": "normal",
        "second_type": "fighting"
      }
    },
    {
      "number": 760,
      "name": "bewear",
      "types": {
        "first_type": "normal",
        "second_type": "fighting"
      }
    },
    {
      "number": 761,
      "name": "bounsweet",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 762,
      "name": "steenee",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 763,
      "name": "tsareena",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 764,
      "name": "comfey",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 765,
      "name": "oranguru",
      "types": {
        "first_type": "normal",
        "second_type": "psychic"
      }
    },
    {
      "number": 766,
      "name": "passimian",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 767,
      "name": "wimpod",
      "types": {
        "first_type": "bug",
        "second_type": "water"
      }
    },
    {
      "number": 768,
      "name": "golisopod",
      "types": {
        "first_type": "bug",
        "second_type": "water"
      }
    },
    {
      "number": 769,
      "name": "sandygast",
      "types": {
        "first_type": "ghost",
        "second_type": "ground"
      }
    },
    {
      "number": 770,
      "name": "palossand",
      "types": {
        "first_type": "ghost",
        "second_type": "ground"
      }
    },
    {
      "number": 771,
      "name": "pyukumuku",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 772,
      "name": "type-null",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 773,
      "name": "silvally",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 774,
      "name": "minior-red-meteor",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 775,
      "name": "komala",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 776,
      "name": "turtonator",
      "types": {
        "first_type": "fire",
        "second_type": "dragon"
      }
    },
    {
      "number": 777,
      "name": "togedemaru",
      "types": {
        "first_type": "electric",
        "second_type": "steel"
      }
    },
    {
      "number": 778,
      "name": "mimikyu-disguised",
      "types": {
        "first_type": "ghost",
        "second_type": "fairy"
      }
    },
    {
      "number": 779,
      "name": "bruxish",
      "types": {
        "first_type": "water",
        "second_type": "psychic"
      }
    },
    {
      "number": 780,
      "name": "drampa",
      "types": {
        "first_type": "normal",
        "second_type": "dragon"
      }
    },
    {
      "number": 781,
      "name": "dhelmise",
      "types": {
        "first_type": "ghost",
        "second_type": "grass"
      }
    },
    {
      "number": 782,
      "name": "jangmo-o",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 783,
      "name": "hakamo-o",
      "types": {
        "first_type": "dragon",
        "second_type": "fighting"
      }
    },
    {
      "number": 784,
      "name": "kommo-o",
      "types": {
        "first_type": "dragon",
        "second_type": "fighting"
      }
    },
    {
      "number": 785,
      "name": "tapu-koko",
      "types": {
        "first_type": "electric",
        "second_type": "fairy"
      }
    },
    {
      "number": 786,
      "name": "tapu-lele",
      "types": {
        "first_type": "psychic",
        "second_type": "fairy"
      }
    },
    {
      "number": 787,
      "name": "tapu-bulu",
      "types": {
        "first_type": "grass",
        "second_type": "fairy"
      }
    },
    {
      "number": 788,
      "name": "tapu-fini",
      "types": {
        "first_type": "water",
        "second_type": "fairy"
      }
    },
    {
      "number": 789,
      "name": "cosmog",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 790,
      "name": "cosmoem",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 791,
      "name": "solgaleo",
      "types": {
        "first_type": "psychic",
        "second_type": "steel"
      }
    },
    {
      "number": 792,
      "name": "lunala",
      "types": {
        "first_type": "psychic",
        "second_type": "ghost"
      }
    },
    {
      "number": 793,
      "name": "nihilego",
      "types": {
        "first_type": "rock",
        "second_type": "poison"
      }
    },
    {
      "number": 794,
      "name": "buzzwole",
      "types": {
        "first_type": "bug",
        "second_type": "fighting"
      }
    },
    {
      "number": 795,
      "name": "pheromosa",
      "types": {
        "first_type": "bug",
        "second_type": "fighting"
      }
    },
    {
      "number": 796,
      "name": "xurkitree",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 797,
      "name": "celesteela",
      "types": {
        "first_type": "steel",
        "second_type": "flying"
      }
    },
    {
      "number": 798,
      "name": "kartana",
      "types": {
        "first_type": "grass",
        "second_type": "steel"
      }
    },
    {
      "number": 799,
      "name": "guzzlord",
      "types": {
        "first_type": "dark",
        "second_type": "dragon"
      }
    },
    {
      "number": 800,
      "name": "necrozma",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 801,
      "name": "magearna",
      "types": {
        "first_type": "steel",
        "second_type": "fairy"
      }
    },
    {
      "number": 802,
      "name": "marshadow",
      "types": {
        "first_type": "fighting",
        "second_type": "ghost"
      }
    },
    {
      "number": 803,
      "name": "poipole",
      "types": {
        "first_type": "poison",
        "second_type": null
      }
    },
    {
      "number": 804,
      "name": "naganadel",
      "types": {
        "first_type": "poison",
        "second_type": "dragon"
      }
    },
    {
      "number": 805,
      "name": "stakataka",
      "types": {
        "first_type": "rock",
        "second_type": "steel"
      }
    },
    {
      "number": 806,
      "name": "blacephalon",
      "types": {
        "first_type": "fire",
        "second_type": "ghost"
      }
    },
    {
      "number": 807,
      "name": "zeraora",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 808,
      "name": "meltan",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 809,
      "name": "melmetal",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 810,
      "name": "grookey",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 811,
      "name": "thwackey",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 812,
      "name": "rillaboom",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 813,
      "name": "scorbunny",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 814,
      "name": "raboot",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 815,
      "name": "cinderace",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 816,
      "name": "sobble",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 817,
      "name": "drizzile",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 818,
      "name": "inteleon",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 819,
      "name": "skwovet",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 820,
      "name": "greedent",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 821,
      "name": "rookidee",
      "types": {
        "first_type": "flying",
        "second_type": null
      }
    },
    {
      "number": 822,
      "name": "corvisquire",
      "types": {
        "first_type": "flying",
        "second_type": null
      }
    },
    {
      "number": 823,
      "name": "corviknight",
      "types": {
        "first_type": "flying",
        "second_type": "steel"
      }
    },
    {
      "number": 824,
      "name": "blipbug",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 825,
      "name": "dottler",
      "types": {
        "first_type": "bug",
        "second_type": "psychic"
      }
    },
    {
      "number": 826,
      "name": "orbeetle",
      "types": {
        "first_type": "bug",
        "second_type": "psychic"
      }
    },
    {
      "number": 827,
      "name": "nickit",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 828,
      "name": "thievul",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 829,
      "name": "gossifleur",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 830,
      "name": "eldegoss",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 831,
      "name": "wooloo",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 832,
      "name": "dubwool",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 833,
      "name": "chewtle",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 834,
      "name": "drednaw",
      "types": {
        "first_type": "water",
        "second_type": "rock"
      }
    },
    {
      "number": 835,
      "name": "yamper",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 836,
      "name": "boltund",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 837,
      "name": "rolycoly",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 838,
      "name": "carkol",
      "types": {
        "first_type": "rock",
        "second_type": "fire"
      }
    },
    {
      "number": 839,
      "name": "coalossal",
      "types": {
        "first_type": "rock",
        "second_type": "fire"
      }
    },
    {
      "number": 840,
      "name": "applin",
      "types": {
        "first_type": "grass",
        "second_type": "dragon"
      }
    },
    {
      "number": 841,
      "name": "flapple",
      "types": {
        "first_type": "grass",
        "second_type": "dragon"
      }
    },
    {
      "number": 842,
      "name": "appletun",
      "types": {
        "first_type": "grass",
        "second_type": "dragon"
      }
    },
    {
      "number": 843,
      "name": "silicobra",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 844,
      "name": "sandaconda",
      "types": {
        "first_type": "ground",
        "second_type": null
      }
    },
    {
      "number": 845,
      "name": "cramorant",
      "types": {
        "first_type": "flying",
        "second_type": "water"
      }
    },
    {
      "number": 846,
      "name": "arrokuda",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 847,
      "name": "barraskewda",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 848,
      "name": "toxel",
      "types": {
        "first_type": "electric",
        "second_type": "poison"
      }
    },
    {
      "number": 849,
      "name": "toxtricity-amped",
      "types": {
        "first_type": "electric",
        "second_type": "poison"
      }
    },
    {
      "number": 850,
      "name": "sizzlipede",
      "types": {
        "first_type": "fire",
        "second_type": "bug"
      }
    },
    {
      "number": 851,
      "name": "centiskorch",
      "types": {
        "first_type": "fire",
        "second_type": "bug"
      }
    },
    {
      "number": 852,
      "name": "clobbopus",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 853,
      "name": "grapploct",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 854,
      "name": "sinistea",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 855,
      "name": "polteageist",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 856,
      "name": "hatenna",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 857,
      "name": "hattrem",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 858,
      "name": "hatterene",
      "types": {
        "first_type": "psychic",
        "second_type": "fairy"
      }
    },
    {
      "number": 859,
      "name": "impidimp",
      "types": {
        "first_type": "dark",
        "second_type": "fairy"
      }
    },
    {
      "number": 860,
      "name": "morgrem",
      "types": {
        "first_type": "dark",
        "second_type": "fairy"
      }
    },
    {
      "number": 861,
      "name": "grimmsnarl",
      "types": {
        "first_type": "dark",
        "second_type": "fairy"
      }
    },
    {
      "number": 862,
      "name": "obstagoon",
      "types": {
        "first_type": "dark",
        "second_type": "normal"
      }
    },
    {
      "number": 863,
      "name": "perrserker",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 864,
      "name": "cursola",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 865,
      "name": "sirfetchd",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 866,
      "name": "mr-rime",
      "types": {
        "first_type": "ice",
        "second_type": "psychic"
      }
    },
    {
      "number": 867,
      "name": "runerigus",
      "types": {
        "first_type": "ground",
        "second_type": "ghost"
      }
    },
    {
      "number": 868,
      "name": "milcery",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 869,
      "name": "alcremie",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 870,
      "name": "falinks",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 871,
      "name": "pincurchin",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 872,
      "name": "snom",
      "types": {
        "first_type": "ice",
        "second_type": "bug"
      }
    },
    {
      "number": 873,
      "name": "frosmoth",
      "types": {
        "first_type": "ice",
        "second_type": "bug"
      }
    },
    {
      "number": 874,
      "name": "stonjourner",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 875,
      "name": "eiscue-ice",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 876,
      "name": "indeedee-male",
      "types": {
        "first_type": "psychic",
        "second_type": "normal"
      }
    },
    {
      "number": 877,
      "name": "morpeko-full-belly",
      "types": {
        "first_type": "electric",
        "second_type": "dark"
      }
    },
    {
      "number": 878,
      "name": "cufant",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 879,
      "name": "copperajah",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 880,
      "name": "dracozolt",
      "types": {
        "first_type": "electric",
        "second_type": "dragon"
      }
    },
    {
      "number": 881,
      "name": "arctozolt",
      "types": {
        "first_type": "electric",
        "second_type": "ice"
      }
    },
    {
      "number": 882,
      "name": "dracovish",
      "types": {
        "first_type": "water",
        "second_type": "dragon"
      }
    },
    {
      "number": 883,
      "name": "arctovish",
      "types": {
        "first_type": "water",
        "second_type": "ice"
      }
    },
    {
      "number": 884,
      "name": "duraludon",
      "types": {
        "first_type": "steel",
        "second_type": "dragon"
      }
    },
    {
      "number": 885,
      "name": "dreepy",
      "types": {
        "first_type": "dragon",
        "second_type": "ghost"
      }
    },
    {
      "number": 886,
      "name": "drakloak",
      "types": {
        "first_type": "dragon",
        "second_type": "ghost"
      }
    },
    {
      "number": 887,
      "name": "dragapult",
      "types": {
        "first_type": "dragon",
        "second_type": "ghost"
      }
    },
    {
      "number": 888,
      "name": "zacian",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 889,
      "name": "zamazenta",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 890,
      "name": "eternatus",
      "types": {
        "first_type": "poison",
        "second_type": "dragon"
      }
    },
    {
      "number": 891,
      "name": "kubfu",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 892,
      "name": "urshifu-single-strike",
      "types": {
        "first_type": "fighting",
        "second_type": "dark"
      }
    },
    {
      "number": 893,
      "name": "zarude",
      "types": {
        "first_type": "dark",
        "second_type": "grass"
      }
    },
    {
      "number": 894,
      "name": "regieleki",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 895,
      "name": "regidrago",
      "types": {
        "first_type": "dragon",
        "second_type": null
      }
    },
    {
      "number": 896,
      "name": "glastrier",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 897,
      "name": "spectrier",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 898,
      "name": "calyrex",
      "types": {
        "first_type": "psychic",
        "second_type": "grass"
      }
    },
    {
      "number": 899,
      "name": "wyrdeer",
      "types": {
        "first_type": "normal",
        "second_type": "psychic"
      }
    },
    {
      "number": 900,
      "name": "kleavor",
      "types": {
        "first_type": "bug",
        "second_type": "rock"
      }
    },
    {
      "number": 901,
      "name": "ursaluna",
      "types": {
        "first_type": "ground",
        "second_type": "normal"
      }
    },
    {
      "number": 902,
      "name": "basculegion-male",
      "types": {
        "first_type": "water",
        "second_type": "ghost"
      }
    },
    {
      "number": 903,
      "name": "sneasler",
      "types": {
        "first_type": "fighting",
        "second_type": "poison"
      }
    },
    {
      "number": 904,
      "name": "overqwil",
      "types": {
        "first_type": "dark",
        "second_type": "poison"
      }
    },
    {
      "number": 905,
      "name": "enamorus-incarnate",
      "types": {
        "first_type": "fairy",
        "second_type": "flying"
      }
    },
    {
      "number": 906,
      "name": "sprigatito",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 907,
      "name": "floragato",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 908,
      "name": "meowscarada",
      "types": {
        "first_type": "grass",
        "second_type": "dark"
      }
    },
    {
      "number": 909,
      "name": "fuecoco",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 910,
      "name": "crocalor",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 911,
      "name": "skeledirge",
      "types": {
        "first_type": "fire",
        "second_type": "ghost"
      }
    },
    {
      "number": 912,
      "name": "quaxly",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 913,
      "name": "quaxwell",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 914,
      "name": "quaquaval",
      "types": {
        "first_type": "water",
        "second_type": "fighting"
      }
    },
    {
      "number": 915,
      "name": "lechonk",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 916,
      "name": "oinkologne",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 917,
      "name": "tarountula",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 918,
      "name": "spidops",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 919,
      "name": "nymble",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 920,
      "name": "lokix",
      "types": {
        "first_type": "bug",
        "second_type": "dark"
      }
    },
    {
      "number": 921,
      "name": "pawmi",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 922,
      "name": "pawmo",
      "types": {
        "first_type": "electric",
        "second_type": "fighting"
      }
    },
    {
      "number": 923,
      "name": "pawmot",
      "types": {
        "first_type": "electric",
        "second_type": "fighting"
      }
    },
    {
      "number": 924,
      "name": "tandemaus",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 925,
      "name": "maushold",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 926,
      "name": "fidough",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 927,
      "name": "dachsbun",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 928,
      "name": "smoliv",
      "types": {
        "first_type": "grass",
        "second_type": "normal"
      }
    },
    {
      "number": 929,
      "name": "dolliv",
      "types": {
        "first_type": "grass",
        "second_type": "normal"
      }
    },
    {
      "number": 930,
      "name": "arboliva",
      "types": {
        "first_type": "grass",
        "second_type": "normal"
      }
    },
    {
      "number": 931,
      "name": "squawkabilly",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 932,
      "name": "nacli",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 933,
      "name": "naclstack",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 934,
      "name": "garganacl",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 935,
      "name": "charcadet",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 936,
      "name": "armarouge",
      "types": {
        "first_type": "fire",
        "second_type": "psychic"
      }
    },
    {
      "number": 937,
      "name": "ceruledge",
      "types": {
        "first_type": "fire",
        "second_type": "ghost"
      }
    },
    {
      "number": 938,
      "name": "tadbulb",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 939,
      "name": "bellibolt",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 940,
      "name": "wattrel",
      "types": {
        "first_type": "electric",
        "second_type": "flying"
      }
    },
    {
      "number": 941,
      "name": "kilowattrel",
      "types": {
        "first_type": "electric",
        "second_type": "flying"
      }
    },
    {
      "number": 942,
      "name": "maschiff",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 943,
      "name": "mabosstiff",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 944,
      "name": "shroodle",
      "types": {
        "first_type": "poison",
        "second_type": "normal"
      }
    },
    {
      "number": 945,
      "name": "grafaiai",
      "types": {
        "first_type": "poison",
        "second_type": "normal"
      }
    },
    {
      "number": 946,
      "name": "bramblin",
      "types": {
        "first_type": "grass",
        "second_type": "ghost"
      }
    },
    {
      "number": 947,
      "name": "brambleghast",
      "types": {
        "first_type": "grass",
        "second_type": "ghost"
      }
    },
    {
      "number": 948,
      "name": "toedscool",
      "types": {
        "first_type": "ground",
        "second_type": "grass"
      }
    },
    {
      "number": 949,
      "name": "toedscruel",
      "types": {
        "first_type": "ground",
        "second_type": "grass"
      }
    },
    {
      "number": 950,
      "name": "klawf",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 951,
      "name": "capsakid",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 952,
      "name": "scovillain",
      "types": {
        "first_type": "grass",
        "second_type": "fire"
      }
    },
    {
      "number": 953,
      "name": "rellor",
      "types": {
        "first_type": "bug",
        "second_type": null
      }
    },
    {
      "number": 954,
      "name": "rabsca",
      "types": {
        "first_type": "bug",
        "second_type": "psychic"
      }
    },
    {
      "number": 955,
      "name": "flittle",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 956,
      "name": "espathra",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 957,
      "name": "tinkatink",
      "types": {
        "first_type": "fairy",
        "second_type": "steel"
      }
    },
    {
      "number": 958,
      "name": "tinkatuff",
      "types": {
        "first_type": "fairy",
        "second_type": "steel"
      }
    },
    {
      "number": 959,
      "name": "tinkaton",
      "types": {
        "first_type": "fairy",
        "second_type": "steel"
      }
    },
    {
      "number": 960,
      "name": "wiglett",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 961,
      "name": "wugtrio",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 962,
      "name": "bombirdier",
      "types": {
        "first_type": "flying",
        "second_type": "dark"
      }
    },
    {
      "number": 963,
      "name": "finizen",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 964,
      "name": "palafin",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 965,
      "name": "varoom",
      "types": {
        "first_type": "steel",
        "second_type": "poison"
      }
    },
    {
      "number": 966,
      "name": "revavroom",
      "types": {
        "first_type": "steel",
        "second_type": "poison"
      }
    },
    {
      "number": 967,
      "name": "cyclizar",
      "types": {
        "first_type": "dragon",
        "second_type": "normal"
      }
    },
    {
      "number": 968,
      "name": "orthworm",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 969,
      "name": "glimmet",
      "types": {
        "first_type": "rock",
        "second_type": "poison"
      }
    },
    {
      "number": 970,
      "name": "glimmora",
      "types": {
        "first_type": "rock",
        "second_type": "poison"
      }
    },
    {
      "number": 971,
      "name": "greavard",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 972,
      "name": "houndstone",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 973,
      "name": "flamigo",
      "types": {
        "first_type": "flying",
        "second_type": "fighting"
      }
    },
    {
      "number": 974,
      "name": "cetoddle",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 975,
      "name": "cetitan",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 976,
      "name": "veluza",
      "types": {
        "first_type": "water",
        "second_type": "psychic"
      }
    },
    {
      "number": 977,
      "name": "dondozo",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 978,
      "name": "tatsugiri",
      "types": {
        "first_type": "dragon",
        "second_type": "water"
      }
    },
    {
      "number": 979,
      "name": "annihilape",
      "types": {
        "first_type": "fighting",
        "second_type": "ghost"
      }
    },
    {
      "number": 980,
      "name": "clodsire",
      "types": {
        "first_type": "poison",
        "second_type": "ground"
      }
    },
    {
      "number": 981,
      "name": "farigiraf",
      "types": {
        "first_type": "normal",
        "second_type": "psychic"
      }
    },
    {
      "number": 982,
      "name": "dudunsparce",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 983,
      "name": "kingambit",
      "types": {
        "first_type": "dark",
        "second_type": "steel"
      }
    },
    {
      "number": 984,
      "name": "great-tusk",
      "types": {
        "first_type": "ground",
        "second_type": "fighting"
      }
    },
    {
      "number": 985,
      "name": "scream-tail",
      "types": {
        "first_type": "fairy",
        "second_type": "psychic"
      }
    },
    {
      "number": 986,
      "name": "brute-bonnet",
      "types": {
        "first_type": "grass",
        "second_type": "dark"
      }
    },
    {
      "number": 987,
      "name": "flutter-mane",
      "types": {
        "first_type": "ghost",
        "second_type": "fairy"
      }
    },
    {
      "number": 988,
      "name": "slither-wing",
      "types": {
        "first_type": "bug",
        "second_type": "fighting"
      }
    },
    {
      "number": 989,
      "name": "sandy-shocks",
      "types": {
        "first_type": "electric",
        "second_type": "ground"
      }
    },
    {
      "number": 990,
      "name": "iron-treads",
      "types": {
        "first_type": "ground",
        "second_type": "steel"
      }
    },
    {
      "number": 991,
      "name": "iron-bundle",
      "types": {
        "first_type": "ice",
        "second_type": "water"
      }
    },
    {
      "number": 992,
      "name": "iron-hands",
      "types": {
        "first_type": "fighting",
        "second_type": "electric"
      }
    },
    {
      "number": 993,
      "name": "iron-jugulis",
      "types": {
        "first_type": "dark",
        "second_type": "flying"
      }
    },
    {
      "number": 994,
      "name": "iron-moth",
      "types": {
        "first_type": "fire",
        "second_type": "poison"
      }
    },
    {
      "number": 995,
      "name": "iron-thorns",
      "types": {
        "first_type": "rock",
        "second_type": "electric"
      }
    },
    {
      "number": 996,
      "name": "frigibax",
      "types": {
        "first_type": "dragon",
        "second_type": "ice"
      }
    },
    {
      "number": 997,
      "name": "arctibax",
      "types": {
        "first_type": "dragon",
        "second_type": "ice"
      }
    },
    {
      "number": 998,
      "name": "baxcalibur",
      "types": {
        "first_type": "dragon",
        "second_type": "ice"
      }
    },
    {
      "number": 999,
      "name": "gimmighoul",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 1000,
      "name": "gholdengo",
      "types": {
        "first_type": "steel",
        "second_type": "ghost"
      }
    },
    {
      "number": 1001,
      "name": "wo-chien",
      "types": {
        "first_type": "dark",
        "second_type": "grass"
      }
    },
    {
      "number": 1002,
      "name": "chien-pao",
      "types": {
        "first_type": "dark",
        "second_type": "ice"
      }
    },
    {
      "number": 1003,
      "name": "ting-lu",
      "types": {
        "first_type": "dark",
        "second_type": "ground"
      }
    },
    {
      "number": 1004,
      "name": "chi-yu",
      "types": {
        "first_type": "dark",
        "second_type": "fire"
      }
    },
    {
      "number": 1005,
      "name": "roaring-moon",
      "types": {
        "first_type": "dragon",
        "second_type": "dark"
      }
    },
    {
      "number": 1006,
      "name": "iron-valiant",
      "types": {
        "first_type": "fairy",
        "second_type": "fighting"
      }
    },
    {
      "number": 1007,
      "name": "koraidon",
      "types": {
        "first_type": "fighting",
        "second_type": "dragon"
      }
    },
    {
      "number": 1008,
      "name": "miraidon",
      "types": {
        "first_type": "electric",
        "second_type": "dragon"
      }
    },
    {
      "number": 1009,
      "name": "walking-wake",
      "types": {
        "first_type": "water",
        "second_type": "dragon"
      }
    },
    {
      "number": 1010,
      "name": "iron-leaves",
      "types": {
        "first_type": "grass",
        "second_type": "psychic"
      }
    },
    {
      "number": 1011,
      "name": "dipplin",
      "types": {
        "first_type": "grass",
        "second_type": "dragon"
      }
    },
    {
      "number": 1012,
      "name": "poltchageist",
      "types": {
        "first_type": "grass",
        "second_type": "ghost"
      }
    },
    {
      "number": 1013,
      "name": "sinistcha",
      "types": {
        "first_type": "grass",
        "second_type": "ghost"
      }
    },
    {
      "number": 1014,
      "name": "okidogi",
      "types": {
        "first_type": "poison",
        "second_type": "fighting"
      }
    },
    {
      "number": 1015,
      "name": "munkidori",
      "types": {
        "first_type": "poison",
        "second_type": "psychic"
      }
    },
    {
      "number": 1016,
      "name": "fezandipiti",
      "types": {
        "first_type": "poison",
        "second_type": "fairy"
      }
    },
    {
      "number": 1017,
      "name": "ogerpon",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 1018,
      "name": "archaludon",
      "types": {
        "first_type": "steel",
        "second_type": "dragon"
      }
    },
    {
      "number": 1019,
      "name": "hydrapple",
      "types": {
        "first_type": "grass",
        "second_type": "dragon"
      }
    },
    {
      "number": 1020,
      "name": "gouging-fire",
      "types": {
        "first_type": "fire",
        "second_type": "dragon"
      }
    },
    {
      "number": 1021,
      "name": "raging-bolt",
      "types": {
        "first_type": "electric",
        "second_type": "dragon"
      }
    },
    {
      "number": 1022,
      "name": "iron-boulder",
      "types": {
        "first_type": "rock",
        "second_type": "psychic"
      }
    },
    {
      "number": 1023,
      "name": "iron-crown",
      "types": {
        "first_type": "steel",
        "second_type": "psychic"
      }
    },
    {
      "number": 1024,
      "name": "terapagos",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 1025,
      "name": "pecharunt",
      "types": {
        "first_type": "poison",
        "second_type": "ghost"
      }
    },
    {
      "number": 10001,
      "name": "deoxys-attack",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 10002,
      "name": "deoxys-defense",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 10003,
      "name": "deoxys-speed",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 10004,
      "name": "wormadam-sandy",
      "types": {
        "first_type": "bug",
        "second_type": "ground"
      }
    },
    {
      "number": 10005,
      "name": "wormadam-trash",
      "types": {
        "first_type": "bug",
        "second_type": "steel"
      }
    },
    {
      "number": 10006,
      "name": "shaymin-sky",
      "types": {
        "first_type": "grass",
        "second_type": "flying"
      }
    },
    {
      "number": 10007,
      "name": "giratina-origin",
      "types": {
        "first_type": "ghost",
        "second_type": "dragon"
      }
    },
    {
      "number": 10008,
      "name": "rotom-heat",
      "types": {
        "first_type": "electric",
        "second_type": "fire"
      }
    },
    {
      "number": 10009,
      "name": "rotom-wash",
      "types": {
        "first_type": "electric",
        "second_type": "water"
      }
    },
    {
      "number": 10010,
      "name": "rotom-frost",
      "types": {
        "first_type": "electric",
        "second_type": "ice"
      }
    },
    {
      "number": 10011,
      "name": "rotom-fan",
      "types": {
        "first_type": "electric",
        "second_type": "flying"
      }
    },
    {
      "number": 10012,
      "name": "rotom-mow",
      "types": {
        "first_type": "electric",
        "second_type": "grass"
      }
    },
    {
      "number": 10013,
      "name": "castform-sunny",
      "types": {
        "first_type": "fire",
        "second_type": null
      }
    },
    {
      "number": 10014,
      "name": "castform-rainy",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 10015,
      "name": "castform-snowy",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 10016,
      "name": "basculin-blue-striped",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 10017,
      "name": "darmanitan-zen",
      "types": {
        "first_type": "fire",
        "second_type": "psychic"
      }
    },
    {
      "number": 10018,
      "name": "meloetta-pirouette",
      "types": {
        "first_type": "normal",
        "second_type": "fighting"
      }
    },
    {
      "number": 10019,
      "name": "tornadus-therian",
      "types": {
        "first_type": "flying",
        "second_type": null
      }
    },
    {
      "number": 10020,
      "name": "thundurus-therian",
      "types": {
        "first_type": "electric",
        "second_type": "flying"
      }
    },
    {
      "number": 10021,
      "name": "landorus-therian",
      "types": {
        "first_type": "ground",
        "second_type": "flying"
      }
    },
    {
      "number": 10022,
      "name": "kyurem-black",
      "types": {
        "first_type": "dragon",
        "second_type": "ice"
      }
    },
    {
      "number": 10023,
      "name": "kyurem-white",
      "types": {
        "first_type": "dragon",
        "second_type": "ice"
      }
    },
    {
      "number": 10024,
      "name": "keldeo-resolute",
      "types": {
        "first_type": "water",
        "second_type": "fighting"
      }
    },
    {
      "number": 10025,
      "name": "meowstic-female",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 10026,
      "name": "aegislash-blade",
      "types": {
        "first_type": "steel",
        "second_type": "ghost"
      }
    },
    {
      "number": 10027,
      "name": "pumpkaboo-small",
      "types": {
        "first_type": "ghost",
        "second_type": "grass"
      }
    },
    {
      "number": 10028,
      "name": "pumpkaboo-large",
      "types": {
        "first_type": "ghost",
        "second_type": "grass"
      }
    },
    {
      "number": 10029,
      "name": "pumpkaboo-super",
      "types": {
        "first_type": "ghost",
        "second_type": "grass"
      }
    },
    {
      "number": 10030,
      "name": "gourgeist-small",
      "types": {
        "first_type": "ghost",
        "second_type": "grass"
      }
    },
    {
      "number": 10031,
      "name": "gourgeist-large",
      "types": {
        "first_type": "ghost",
        "second_type": "grass"
      }
    },
    {
      "number": 10032,
      "name": "gourgeist-super",
      "types": {
        "first_type": "ghost",
        "second_type": "grass"
      }
    },
    {
      "number": 10033,
      "name": "venusaur-mega",
      "types": {
        "first_type": "grass",
        "second_type": "poison"
      }
    },
    {
      "number": 10034,
      "name": "charizard-mega-x",
      "types": {
        "first_type": "fire",
        "second_type": "dragon"
      }
    },
    {
      "number": 10035,
      "name": "charizard-mega-y",
      "types": {
        "first_type": "fire",
        "second_type": "flying"
      }
    },
    {
      "number": 10036,
      "name": "blastoise-mega",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 10037,
      "name": "alakazam-mega",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 10038,
      "name": "gengar-mega",
      "types": {
        "first_type": "ghost",
        "second_type": "poison"
      }
    },
    {
      "number": 10039,
      "name": "kangaskhan-mega",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 10040,
      "name": "pinsir-mega",
      "types": {
        "first_type": "bug",
        "second_type": "flying"
      }
    },
    {
      "number": 10041,
      "name": "gyarados-mega",
      "types": {
        "first_type": "water",
        "second_type": "dark"
      }
    },
    {
      "number": 10042,
      "name": "aerodactyl-mega",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10043,
      "name": "mewtwo-mega-x",
      "types": {
        "first_type": "psychic",
        "second_type": "fighting"
      }
    },
    {
      "number": 10044,
      "name": "mewtwo-mega-y",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 10045,
      "name": "ampharos-mega",
      "types": {
        "first_type": "electric",
        "second_type": "dragon"
      }
    },
    {
      "number": 10046,
      "name": "scizor-mega",
      "types": {
        "first_type": "bug",
        "second_type": "steel"
      }
    },
    {
      "number": 10047,
      "name": "heracross-mega",
      "types": {
        "first_type": "bug",
        "second_type": "fighting"
      }
    },
    {
      "number": 10048,
      "name": "houndoom-mega",
      "types": {
        "first_type": "dark",
        "second_type": "fire"
      }
    },
    {
      "number": 10049,
      "name": "tyranitar-mega",
      "types": {
        "first_type": "rock",
        "second_type": "dark"
      }
    },
    {
      "number": 10050,
      "name": "blaziken-mega",
      "types": {
        "first_type": "fire",
        "second_type": "fighting"
      }
    },
    {
      "number": 10051,
      "name": "gardevoir-mega",
      "types": {
        "first_type": "psychic",
        "second_type": "fairy"
      }
    },
    {
      "number": 10052,
      "name": "mawile-mega",
      "types": {
        "first_type": "steel",
        "second_type": "fairy"
      }
    },
    {
      "number": 10053,
      "name": "aggron-mega",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 10054,
      "name": "medicham-mega",
      "types": {
        "first_type": "fighting",
        "second_type": "psychic"
      }
    },
    {
      "number": 10055,
      "name": "manectric-mega",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10056,
      "name": "banette-mega",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 10057,
      "name": "absol-mega",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 10058,
      "name": "garchomp-mega",
      "types": {
        "first_type": "dragon",
        "second_type": "ground"
      }
    },
    {
      "number": 10059,
      "name": "lucario-mega",
      "types": {
        "first_type": "fighting",
        "second_type": "steel"
      }
    },
    {
      "number": 10060,
      "name": "abomasnow-mega",
      "types": {
        "first_type": "grass",
        "second_type": "ice"
      }
    },
    {
      "number": 10061,
      "name": "floette-eternal",
      "types": {
        "first_type": "fairy",
        "second_type": null
      }
    },
    {
      "number": 10062,
      "name": "latias-mega",
      "types": {
        "first_type": "dragon",
        "second_type": "psychic"
      }
    },
    {
      "number": 10063,
      "name": "latios-mega",
      "types": {
        "first_type": "dragon",
        "second_type": "psychic"
      }
    },
    {
      "number": 10064,
      "name": "swampert-mega",
      "types": {
        "first_type": "water",
        "second_type": "ground"
      }
    },
    {
      "number": 10065,
      "name": "sceptile-mega",
      "types": {
        "first_type": "grass",
        "second_type": "dragon"
      }
    },
    {
      "number": 10066,
      "name": "sableye-mega",
      "types": {
        "first_type": "dark",
        "second_type": "ghost"
      }
    },
    {
      "number": 10067,
      "name": "altaria-mega",
      "types": {
        "first_type": "dragon",
        "second_type": "fairy"
      }
    },
    {
      "number": 10068,
      "name": "gallade-mega",
      "types": {
        "first_type": "psychic",
        "second_type": "fighting"
      }
    },
    {
      "number": 10069,
      "name": "audino-mega",
      "types": {
        "first_type": "normal",
        "second_type": "fairy"
      }
    },
    {
      "number": 10070,
      "name": "sharpedo-mega",
      "types": {
        "first_type": "water",
        "second_type": "dark"
      }
    },
    {
      "number": 10071,
      "name": "slowbro-mega",
      "types": {
        "first_type": "water",
        "second_type": "psychic"
      }
    },
    {
      "number": 10072,
      "name": "steelix-mega",
      "types": {
        "first_type": "steel",
        "second_type": "ground"
      }
    },
    {
      "number": 10073,
      "name": "pidgeot-mega",
      "types": {
        "first_type": "normal",
        "second_type": "flying"
      }
    },
    {
      "number": 10074,
      "name": "glalie-mega",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 10075,
      "name": "diancie-mega",
      "types": {
        "first_type": "rock",
        "second_type": "fairy"
      }
    },
    {
      "number": 10076,
      "name": "metagross-mega",
      "types": {
        "first_type": "steel",
        "second_type": "psychic"
      }
    },
    {
      "number": 10077,
      "name": "kyogre-primal",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 10078,
      "name": "groudon-primal",
      "types": {
        "first_type": "ground",
        "second_type": "fire"
      }
    },
    {
      "number": 10079,
      "name": "rayquaza-mega",
      "types": {
        "first_type": "dragon",
        "second_type": "flying"
      }
    },
    {
      "number": 10080,
      "name": "pikachu-rock-star",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10081,
      "name": "pikachu-belle",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10082,
      "name": "pikachu-pop-star",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10083,
      "name": "pikachu-phd",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10084,
      "name": "pikachu-libre",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10085,
      "name": "pikachu-cosplay",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10086,
      "name": "hoopa-unbound",
      "types": {
        "first_type": "psychic",
        "second_type": "dark"
      }
    },
    {
      "number": 10087,
      "name": "camerupt-mega",
      "types": {
        "first_type": "fire",
        "second_type": "ground"
      }
    },
    {
      "number": 10088,
      "name": "lopunny-mega",
      "types": {
        "first_type": "normal",
        "second_type": "fighting"
      }
    },
    {
      "number": 10089,
      "name": "salamence-mega",
      "types": {
        "first_type": "dragon",
        "second_type": "flying"
      }
    },
    {
      "number": 10090,
      "name": "beedrill-mega",
      "types": {
        "first_type": "bug",
        "second_type": "poison"
      }
    },
    {
      "number": 10091,
      "name": "rattata-alola",
      "types": {
        "first_type": "dark",
        "second_type": "normal"
      }
    },
    {
      "number": 10092,
      "name": "raticate-alola",
      "types": {
        "first_type": "dark",
        "second_type": "normal"
      }
    },
    {
      "number": 10093,
      "name": "raticate-totem-alola",
      "types": {
        "first_type": "dark",
        "second_type": "normal"
      }
    },
    {
      "number": 10094,
      "name": "pikachu-original-cap",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10095,
      "name": "pikachu-hoenn-cap",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10096,
      "name": "pikachu-sinnoh-cap",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10097,
      "name": "pikachu-unova-cap",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10098,
      "name": "pikachu-kalos-cap",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10099,
      "name": "pikachu-alola-cap",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10100,
      "name": "raichu-alola",
      "types": {
        "first_type": "electric",
        "second_type": "psychic"
      }
    },
    {
      "number": 10101,
      "name": "sandshrew-alola",
      "types": {
        "first_type": "ice",
        "second_type": "steel"
      }
    },
    {
      "number": 10102,
      "name": "sandslash-alola",
      "types": {
        "first_type": "ice",
        "second_type": "steel"
      }
    },
    {
      "number": 10103,
      "name": "vulpix-alola",
      "types": {
        "first_type": "ice",
        "second_type": null
      }
    },
    {
      "number": 10104,
      "name": "ninetales-alola",
      "types": {
        "first_type": "ice",
        "second_type": "fairy"
      }
    },
    {
      "number": 10105,
      "name": "diglett-alola",
      "types": {
        "first_type": "ground",
        "second_type": "steel"
      }
    },
    {
      "number": 10106,
      "name": "dugtrio-alola",
      "types": {
        "first_type": "ground",
        "second_type": "steel"
      }
    },
    {
      "number": 10107,
      "name": "meowth-alola",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 10108,
      "name": "persian-alola",
      "types": {
        "first_type": "dark",
        "second_type": null
      }
    },
    {
      "number": 10109,
      "name": "geodude-alola",
      "types": {
        "first_type": "rock",
        "second_type": "electric"
      }
    },
    {
      "number": 10110,
      "name": "graveler-alola",
      "types": {
        "first_type": "rock",
        "second_type": "electric"
      }
    },
    {
      "number": 10111,
      "name": "golem-alola",
      "types": {
        "first_type": "rock",
        "second_type": "electric"
      }
    },
    {
      "number": 10112,
      "name": "grimer-alola",
      "types": {
        "first_type": "poison",
        "second_type": "dark"
      }
    },
    {
      "number": 10113,
      "name": "muk-alola",
      "types": {
        "first_type": "poison",
        "second_type": "dark"
      }
    },
    {
      "number": 10114,
      "name": "exeggutor-alola",
      "types": {
        "first_type": "grass",
        "second_type": "dragon"
      }
    },
    {
      "number": 10115,
      "name": "marowak-alola",
      "types": {
        "first_type": "fire",
        "second_type": "ghost"
      }
    },
    {
      "number": 10116,
      "name": "greninja-battle-bond",
      "types": {
        "first_type": "water",
        "second_type": "dark"
      }
    },
    {
      "number": 10117,
      "name": "greninja-ash",
      "types": {
        "first_type": "water",
        "second_type": "dark"
      }
    },
    {
      "number": 10118,
      "name": "zygarde-10-power-construct",
      "types": {
        "first_type": "dragon",
        "second_type": "ground"
      }
    },
    {
      "number": 10119,
      "name": "zygarde-50-power-construct",
      "types": {
        "first_type": "dragon",
        "second_type": "ground"
      }
    },
    {
      "number": 10120,
      "name": "zygarde-complete",
      "types": {
        "first_type": "dragon",
        "second_type": "ground"
      }
    },
    {
      "number": 10121,
      "name": "gumshoos-totem",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 10122,
      "name": "vikavolt-totem",
      "types": {
        "first_type": "bug",
        "second_type": "electric"
      }
    },
    {
      "number": 10123,
      "name": "oricorio-pom-pom",
      "types": {
        "first_type": "electric",
        "second_type": "flying"
      }
    },
    {
      "number": 10124,
      "name": "oricorio-pau",
      "types": {
        "first_type": "psychic",
        "second_type": "flying"
      }
    },
    {
      "number": 10125,
      "name": "oricorio-sensu",
      "types": {
        "first_type": "ghost",
        "second_type": "flying"
      }
    },
    {
      "number": 10126,
      "name": "lycanroc-midnight",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 10127,
      "name": "wishiwashi-school",
      "types": {
        "first_type": "water",
        "second_type": null
      }
    },
    {
      "number": 10128,
      "name": "lurantis-totem",
      "types": {
        "first_type": "grass",
        "second_type": null
      }
    },
    {
      "number": 10129,
      "name": "salazzle-totem",
      "types": {
        "first_type": "poison",
        "second_type": "fire"
      }
    },
    {
      "number": 10130,
      "name": "minior-orange-meteor",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10131,
      "name": "minior-yellow-meteor",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10132,
      "name": "minior-green-meteor",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10133,
      "name": "minior-blue-meteor",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10134,
      "name": "minior-indigo-meteor",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10135,
      "name": "minior-violet-meteor",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10136,
      "name": "minior-red",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10137,
      "name": "minior-orange",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10138,
      "name": "minior-yellow",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10139,
      "name": "minior-green",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10140,
      "name": "minior-blue",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10141,
      "name": "minior-indigo",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10142,
      "name": "minior-violet",
      "types": {
        "first_type": "rock",
        "second_type": "flying"
      }
    },
    {
      "number": 10143,
      "name": "mimikyu-busted",
      "types": {
        "first_type": "ghost",
        "second_type": "fairy"
      }
    },
    {
      "number": 10144,
      "name": "mimikyu-totem-disguised",
      "types": {
        "first_type": "ghost",
        "second_type": "fairy"
      }
    },
    {
      "number": 10145,
      "name": "mimikyu-totem-busted",
      "types": {
        "first_type": "ghost",
        "second_type": "fairy"
      }
    },
    {
      "number": 10146,
      "name": "kommo-o-totem",
      "types": {
        "first_type": "dragon",
        "second_type": "fighting"
      }
    },
    {
      "number": 10147,
      "name": "magearna-original",
      "types": {
        "first_type": "steel",
        "second_type": "fairy"
      }
    },
    {
      "number": 10148,
      "name": "pikachu-partner-cap",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10149,
      "name": "marowak-totem",
      "types": {
        "first_type": "fire",
        "second_type": "ghost"
      }
    },
    {
      "number": 10150,
      "name": "ribombee-totem",
      "types": {
        "first_type": "bug",
        "second_type": "fairy"
      }
    },
    {
      "number": 10151,
      "name": "rockruff-own-tempo",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 10152,
      "name": "lycanroc-dusk",
      "types": {
        "first_type": "rock",
        "second_type": null
      }
    },
    {
      "number": 10153,
      "name": "araquanid-totem",
      "types": {
        "first_type": "water",
        "second_type": "bug"
      }
    },
    {
      "number": 10154,
      "name": "togedemaru-totem",
      "types": {
        "first_type": "electric",
        "second_type": "steel"
      }
    },
    {
      "number": 10155,
      "name": "necrozma-dusk",
      "types": {
        "first_type": "psychic",
        "second_type": "steel"
      }
    },
    {
      "number": 10156,
      "name": "necrozma-dawn",
      "types": {
        "first_type": "psychic",
        "second_type": "ghost"
      }
    },
    {
      "number": 10157,
      "name": "necrozma-ultra",
      "types": {
        "first_type": "psychic",
        "second_type": "dragon"
      }
    },
    {
      "number": 10158,
      "name": "pikachu-starter",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10159,
      "name": "eevee-starter",
      "types": {
        "first_type": "normal",
        "second_type": null
      }
    },
    {
      "number": 10160,
      "name": "pikachu-world-cap",
      "types": {
        "first_type": "electric",
        "second_type": null
      }
    },
    {
      "number": 10161,
      "name": "meowth-galar",
      "types": {
        "first_type": "steel",
        "second_type": null
      }
    },
    {
      "number": 10162,
      "name": "ponyta-galar",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 10163,
      "name": "rapidash-galar",
      "types": {
        "first_type": "psychic",
        "second_type": "fairy"
      }
    },
    {
      "number": 10164,
      "name": "slowpoke-galar",
      "types": {
        "first_type": "psychic",
        "second_type": null
      }
    },
    {
      "number": 10165,
      "name": "slowbro-galar",
      "types": {
        "first_type": "poison",
        "second_type": "psychic"
      }
    },
    {
      "number": 10166,
      "name": "farfetchd-galar",
      "types": {
        "first_type": "fighting",
        "second_type": null
      }
    },
    {
      "number": 10167,
      "name": "weezing-galar",
      "types": {
        "first_type": "poison",
        "second_type": "fairy"
      }
    },
    {
      "number": 10168,
      "name": "mr-mime-galar",
      "types": {
        "first_type": "ice",
        "second_type": "psychic"
      }
    },
    {
      "number": 10169,
      "name": "articuno-galar",
      "types": {
        "first_type": "psychic",
        "second_type": "flying"
      }
    },
    {
      "number": 10170,
      "name": "zapdos-galar",
      "types": {
        "first_type": "fighting",
        "second_type": "flying"
      }
    },
    {
      "number": 10171,
      "name": "moltres-galar",
      "types": {
        "first_type": "dark",
        "second_type": "flying"
      }
    },
    {
      "number": 10172,
      "name": "slowking-galar",
      "types": {
        "first_type": "poison",
        "second_type": "psychic"
      }
    },
    {
      "number": 10173,
      "name": "corsola-galar",
      "types": {
        "first_type": "ghost",
        "second_type": null
      }
    },
    {
      "number": 10174,
      "name": "zigzagoon-galar",
      "types": {
        "first_type": "dark",
        "second_type": "normal"
      }
    },
    {
      "number": 10175,
      "name": "linoone-galar",
      "types": {
        "first_type": "dark",
        "second_type": "normal"
      }
    }
  ];
  constructor() { }
}
