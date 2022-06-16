import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store/slices/counter/";

function App() {
  //Con useSelector seleccionamos el valor de la variable counter del store
  const { counter } = useSelector((state) => state.counter);
  // Con el DISPATCH se ejecuta una acción
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            {/*La accion que se hace dispatch es la de increment */}
            count is: {counter}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
