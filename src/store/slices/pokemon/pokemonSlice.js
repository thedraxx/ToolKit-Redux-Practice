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
            // Agarramos el state y cambiamos el loading a true
            state.isLoading = true;
        },
        // Cuando ya tenemos los pokemons
        setPokemons: (state, action) => {
            console.log(action);
        }
    }
});


// Exportamos las funciones creadores de acciones
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;