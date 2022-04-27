import React from "react";

export function Consumer1({ toggleValue, toggle }) {
  return (
    <div style={{ backgroundColor: "lightpink", padding: "1rem" }}>
      <p>Consumer1: {toggleValue ? "on" : "off"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
