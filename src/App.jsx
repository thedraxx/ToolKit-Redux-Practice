import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  increment_by_amount,
} from "./store/slices/counter/";

function App() {
  //Con useSelector seleccionamos el valor de la variable counter del store
  const { counter } = useSelector((state) => state.counter);
  // Con el DISPATCH se ejecuta una acción
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p> count is: {counter}</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            {/*La accion que se hace dispatch es la de increment */}
            Increment
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            {/*La accion que se hace dispatch es la de increment */}
            Decrement
          </button>
          <button
            type="button"
            onClick={() => dispatch(increment_by_amount(2))}
          >
            {/*La accion que se hace dispatch es la de increment enviandole como argumento en este caso el 2 */}
            Increment by 2
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
