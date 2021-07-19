import {createContext} from "react";
import {themes} from "../../../shared/themes";

export const ThemeContext = createContext(themes.light);