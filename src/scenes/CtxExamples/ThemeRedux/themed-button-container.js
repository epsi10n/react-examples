import React from 'react';
import ThemedButton from "./themed-button";
import {connect, useDispatch, useSelector} from "react-redux";
import {changeButtonTheme} from "./rootReducer";
import {themes} from "../../../shared/themes";

function ThemedButtonContainer() {
    const theme = useSelector(store => store.buttonThemeReducer.theme);
    const dispatch = useDispatch();

    function onBtnClick() {
        dispatch(changeButtonTheme(theme === themes.dark ? themes.light : themes.dark));
    }

    console.log(theme);

    return <ThemedButton theme={theme} onClick={onBtnClick}/>;
}

export default connect()(ThemedButtonContainer);