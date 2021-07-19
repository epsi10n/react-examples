import {ThemeContext} from './theme-context';
import React, {useContext} from "react";

const ThemedButton = (props) => {
    const theme = useContext(ThemeContext)

    return (<button {...props} style={{...theme}}>Themed Button</button>);
}

export default ThemedButton;

