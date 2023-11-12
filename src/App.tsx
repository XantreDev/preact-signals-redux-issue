import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { signal } from "@preact/signals-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux";

const $count = signal(0);

function App() {
  const reduxCount = useSelector<RootState, number>((it) => it.counter);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        Signals counter:
        <button onClick={() => ($count.value += 1)}>count is {$count}</button>
        <br />
        Redux counter:
        <button
          onClick={() => {
            dispatch({
              type: "increment",
            });
          }}
        >
          count is {reduxCount}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
