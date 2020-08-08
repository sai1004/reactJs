/*----------------------ThemeContext.js------------------------*/

import React from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext(themes.light);

/*-----------------------App.js-------------------------*/

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className="main_card">
      <div
        style={{
          background: theme.background,
          color: theme.foreground,
        }}
      >
        <Home />
      </div>
    </div>
  );
}

export default App;
