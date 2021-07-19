import {combineReducers} from "redux";

const CHANGE_BUTTON_THEME = 'CHANGE_BUTTON_THEME'
export function changeButtonTheme(theme) {
    return {
        type: CHANGE_BUTTON_THEME,
        theme
    };
}

const DEFAULT_BUTTON_THEME = {

}

function buttonThemeReducer(state= DEFAULT_BUTTON_THEME, action) {
    if (action.type === CHANGE_BUTTON_THEME) {
        return {...state, ...{theme: action.theme}}
    }
    return state;
}

const rootReducer = combineReducers({
    buttonThemeReducer
});

export default rootReducer;