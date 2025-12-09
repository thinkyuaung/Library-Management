import { createContext } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ThemeContext.Provider(value={{ theme: 'dark' }});

export { ThemeContext, ThemeContextProvider };