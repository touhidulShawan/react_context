import React, { useContext, useState } from "react";

interface ContextProps {
  dark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ContextProps>({
  dark: false,
  toggleTheme: () => void {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark((prevState) => !prevState);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
