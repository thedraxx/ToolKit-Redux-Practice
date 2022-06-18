import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        //  Cuando los pokemons empiezan a cargar
        startLoadingPokemons: (state, /* action */) => {
            // modificamos el state y cambiamos el loading a true
            state.isLoading = true;
        },
        // Cuando ya tenemos los pokemons
        setPokemons: (state, action) => {
            //Modificamos el state con los pokemons y la pagina actual
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});


// Exportamos las funciones creadores de acciones
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;