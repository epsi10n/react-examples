import React, {useState} from "react";
import ThemedButton from "./themed-button";
import {ThemeContext} from "./theme-context";
import {themes} from "../../../shared/themes";

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>);
}

function ThemeContextExample() {
    const [theme, setTheme] = useState(themes.light);

    function toggleTheme() {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    }

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Toolbar changeTheme={toggleTheme} />
            </ThemeContext.Provider>
        </>);
}

export default ThemeContextExample;

