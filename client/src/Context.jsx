import { createContext, useState } from "react";

export const MyContext = createContext("");
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  let savedTheme = localStorage.theme ?? "light";
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};