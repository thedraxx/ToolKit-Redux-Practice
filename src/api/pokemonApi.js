import axios from 'axios';

export const pokemonApi = axios.create({
    // usamos el endpoint de la api de pokemon, pero solo la parte que sabemos que no va a cambiar nunca
    baseURL: 'https://pokeapi.co/api/v2',
});