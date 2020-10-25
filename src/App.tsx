import React from "react";
import "./App.css";
import Box from "./Box";
import { ThemeProvider } from "./ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Learing UseContext</h1>
        <Box />
      </div>
    </ThemeProvider>
  );
};

export default App;
