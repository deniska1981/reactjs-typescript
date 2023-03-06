import { createContext } from "react";

type ThemeContextType = number;

export const ThemeContext = createContext<ThemeContextType>(225);