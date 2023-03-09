import { createContext } from "react";

type ColorContextType = number;

export const ColorContext = createContext<ColorContextType>(10);