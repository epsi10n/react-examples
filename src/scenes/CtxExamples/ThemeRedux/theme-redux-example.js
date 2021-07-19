import React from "react";

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from "./rootReducer";
import ThemedButtonContainer from "./themed-button-container";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger];
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

function ThemeReduxExample() {
    return (<Provider store={store}>
        <ThemedButtonContainer/>
    </Provider>);
}

export default ThemeReduxExample;