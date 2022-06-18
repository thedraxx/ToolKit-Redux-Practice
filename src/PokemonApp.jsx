import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  // useDispatch() se utiliza para ejecutar acciones en el store
  const dispatch = useDispatch();

  // useSelector() se utiliza para obtener el estado del store
  const { page, pokemons, isloading } = useSelector((state) => state.pokemons);

  useEffect(() => {
    //disparamos la accion asyncrona de cargar los pokemones en el thunk
    // al usar una api no podemos usar el dispatch directamente al Slice, por eso hacemos dispatch al thunk, para eso usamos useDispatch()
    // y al ser una peticion asyncrona usamos useEffect() para que se ejecute cuando se termine la peticion
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <hr />
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: {!isloading ? "True" : "false"}</span>

      {pokemons.map((pokemon) => {
        return (
          <ul>
            <li key={pokemon.name}>{pokemon.name}</li>
          </ul>
        );
      })}

      <button disabled={isloading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
