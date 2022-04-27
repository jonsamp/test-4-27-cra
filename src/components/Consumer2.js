import React from "react";

export function Consumer2(toggleValue, toggle) {
  return (
    <div style={{ backgroundColor: "lightcyan", padding: "1rem" }}>
      <p>Consumer2: {toggleValue ? "on" : "off"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
