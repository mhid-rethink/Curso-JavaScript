import {pokemons} from "./data.js";

const busca = (arr, prop, valor) => {
    let pokemon = [];
    for(let i = 0; i < arr.length; i++) {
        if (!(arr[i][prop] instanceof Array) && arr[i][prop] == valor) {
            pokemon.push(arr[i])
        } else if ((arr[i][prop] instanceof Array) && arr[i][prop].includes(valor)) {
            pokemon.push(arr[i]);
        }
    }
    if (pokemon) {
        return pokemon
    }  else {
        return "Who's that pokemon?"
    }
}

const encontraItensUnicosArray = (arr,prop) => {
    const types = []
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i][prop].length; j++) {
            if (!types.includes(arr[i][prop][j])) {
                types.push(arr[i][prop][j]);
            }
        }
    }
    return types
}

const traduzType = (arr) => {
    const types = {
        "grass": "Planta",
        "poison":"Venenoso",
        "fire":"Fogo",
        "flying":"Voador",
        "water":"Água",
        "bug":"Inseto",
        "normal":"Normal",
        "electric":"Elétrico",
        "ground":"Terra",
        "fairy":"Fada",
        "fighting":"Lutador", 
        "psychic":"Psíquico", 
        "rock":"Pedra", 
        "steel":"Metálico", 
        "ice":"Gelo", 
        "ghost":"Fantasma"
    }
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i]["type"].length; j++) {
            if ( types[ arr[i]["type"][j] ] ) {
                arr[i]["type"][j] = ( types[ arr[i]["type"][j] ] );
            }
        }
    }
    return pokemons
}
console.log(busca(pokemons, "name","ekans"));
console.log(encontraItensUnicosArray(pokemons,"type"));
console.log(traduzType(pokemons));
