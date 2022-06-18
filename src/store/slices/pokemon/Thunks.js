import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        // Cuando empieza a cargar los pokemons
        // ejectuamos la accion startLoadingPokemons
        dispatch(startLoadingPokemons());

        //TODO: realizar peticion HTTP para obtener los pokemons
        //Peticion con fetch
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await resp.json();

        //Peticion con axios
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)

        // Cuando ya tenemos los pokemons
        // ejectuamos dispatch con la accion setPokemons con los pokemons obtenidos y la pagina actual
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}