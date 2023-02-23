import {pokemons} from "./data.js";
import {typesTranslation} from "./typesTranslation.js";
const pokemonNameForSearch = "ekans";
const pokemonTypeForSearch = "grass";
const resultPokemonSearchByName = pokemons.filter(pokemon => pokemon.name == pokemonNameForSearch);

const resultPokemonSearchByType = pokemons.filter(pokemon => pokemon.type.includes(pokemonTypeForSearch));

const resultPokemonWithTranslatedType = pokemons.map((pokemon) => {
    return {
    ...pokemon,
    type: pokemon.type.map(type => typesTranslation[type])
}});

// console.log(resultPokemonSearchByName);
// console.log(resultPokemonSearchByType)
console.log(resultPokemonWithTranslatedType);
// console.log(pokemons)
