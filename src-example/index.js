// imports react library to the app
import React from 'react'; 

// library that takes care of rendering
import ReactDOM from 'react-dom'; 

// i think i remember what that is -_-
import './index.css'; 

// imports the app.js file
import App from './App'; 

// useful for production builds if user loses internet connection
import * as serviceWorker from './serviceWorker'; 

// render is a method that inserts react components into DOM
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
