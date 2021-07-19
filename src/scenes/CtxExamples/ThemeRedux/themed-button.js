import React from "react";

function ThemedButton({theme, onClick}) {
    return (<button onClick={onClick} style={theme}>Themed Button</button>);
}

export default ThemedButton;