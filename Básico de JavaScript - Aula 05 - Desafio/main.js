import {pokemons} from "./data.js";
import {typesTranslation} from "./typesTranslation.js";
const resultPokemonSearch = (originalPokemonArray, property, propertyValue) => {
    let pokemonArray = [];
    for(let i = 0; i < originalPokemonArray.length; i++) {
        if (!(originalPokemonArray[i][property] instanceof Array) && originalPokemonArray[i][property] == propertyValue) {
            pokemonArray.push(originalPokemonArray[i])
        } else if ((originalPokemonArray[i][property] instanceof Array) && originalPokemonArray[i][property].includes(propertyValue)) {
            pokemonArray.push(originalPokemonArray[i]);
        }
    }
    if (pokemonArray) {
        return pokemonArray
    }  else {
        return "Who's that pokemon?"
    }
}

const uniqueItensFromArray = (originalPokemonArray,property) => {
    const types = []
    for(let i = 0; i < originalPokemonArray.length; i++) {
        for (let j = 0; j < originalPokemonArray[i][property].length; j++) {
            if (!types.includes(originalPokemonArray[i][property][j])) {
                types.push(originalPokemonArray[i][property][j]);
            }
        }
    }
    return types
}

const pokemonArrayWithTranslatedType = (originalPokemonArray) => {
    for(let i = 0; i < originalPokemonArray.length; i++) {
        for (let j = 0; j < originalPokemonArray[i]["type"].length; j++) {
            if ( typesTranslation[ originalPokemonArray[i]["type"][j] ] ) {
                originalPokemonArray[i]["type"][j] = ( typesTranslation[ originalPokemonArray[i]["type"][j] ] );
            }
        }
    }
    return originalPokemonArray;
}
console.log(resultPokemonSearch(pokemons, "name","ekans"));
console.log(uniqueItensFromArray(pokemons,"type"));
console.log(pokemonArrayWithTranslatedType(pokemons));
