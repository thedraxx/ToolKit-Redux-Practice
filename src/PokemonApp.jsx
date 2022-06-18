import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  // useDispatch() se utiliza para ejecutar acciones en el store
  const dispatch = useDispatch();

  useEffect(() => {
    //disparamos la accion asyncrona de cargar los pokemones en el thunk
    // al usar una api no podemos usar el dispatch directamente, por eso usamos useDispatch()
    // y al ser una peticion asyncrona usamos useEffect() para que se ejecute cuando se termine la peticion
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <hr />
      <h1>Pokemon App</h1>
      <hr />
      <ul>
        <li>dasdas</li>
        <li>dasdas</li>
        <li>dasdas</li>
      </ul>
    </>
  );
};
