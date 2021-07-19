import React from "react";

import ThemeContextExample from "./scenes/CtxExamples/ThemeContext/theme-context-example";
import ThemeReduxExample from "./scenes/CtxExamples/ThemeRedux/theme-redux-example";

import './App.css';

function App() {
    return (
        <div className={"btn-holder"}>
            <ThemeContextExample/>
            <ThemeReduxExample/>
        </div>);
}

export default App;

