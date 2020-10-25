import React from "react";
import { useTheme } from "./ThemeContext";

const Box: React.FC = () => {
  const { dark, toggleTheme } = useTheme();

  const boxStyle: React.CSSProperties = {
    width: "300px",
    height: "300px",
    margin: "30px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "5px solid",
    fontSize: "2rem",
    textTransform: "uppercase",
    background: dark ? "#333" : "#eee",
    color: dark ? "#fff" : "#333",
    borderColor: dark ? "dodgerblue" : "tomato",
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={boxStyle}>Theme Box</div>
    </div>
  );
};

export default Box;
