import React, { useCallback } from "react";
import "./App.css";
import { Consumer1 } from "./components/Consumer1";
import { Consumer2 } from "./components/Consumer2";
import useToggle from "./hooks/useToggle";

function App() {
  const [value, toggleValue] = useToggle(false);

  const wrappedToggleValue = useCallback(() => {
    toggleValue();
  }, [toggleValue]);

  return (
    <div className="App">
      {/* These components won't rerender because `wrappedToggleValue` is the same instance. */}
      {/* <Consumer1 toggle={wrappedToggleValue} toggleValue={value} />
      <Consumer2 toggle={wrappedToggleValue} toggleValue={value} /> */}

      {/* These components will rerender on every render since `toggleValue` is a different instance every render. */}
      <Consumer1 toggle={toggleValue} toggleValue={value} />
      <Consumer2 toggle={toggleValue} toggleValue={value} />

      <div>
        <p>{value ? "On" : "Off"}</p>
        <button
          onClick={() => {
            toggleValue();
          }}
        >
          Toggle
        </button>
      </div>
    </div>
  );
}

export default App;
