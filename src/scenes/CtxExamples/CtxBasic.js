import React, {useContext} from 'react';
import {Button} from "react-bootstrap";

const ThemeContext = React.createContext('light');

const CtxBasic = () => (
    <ThemeContext.Provider value="dark">
        <Toolbar />
    </ThemeContext.Provider>)

const Toolbar = () => {
    return (<div>
        <ThemedButton />
    </div>);
}


const ThemedButton = () => {
    const context = useContext(ThemeContext);
    return <Button theme={context}>Themed button {context}</Button>;
}

export default CtxBasic;
