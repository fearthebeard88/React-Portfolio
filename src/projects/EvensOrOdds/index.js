import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App.js';
import './index.css';
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer, applyMiddleware(thunk));

// store.dispatch(startGame());
// store.dispatch(expandInstructions());
// store.dispatch(cancelGame());
// store.dispatch(collapseInstructions());

// Provider is a higher order function/component that passes
// the global store object to the rest of the application
const EvensOrOdds = ()=>
{
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default EvensOrOdds;