import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// Promises have 2 built in functions, resolve and reject
// You can pass information back to callback by passing
// a parameter to the resolve/reject method
// new Promise((resolve, reject) =>
// {
//     // return reject(new Error('No X-Wings...'));
//     setTimeout(()=>
//     {
//         resolve('X-Wing, Beets, Tie Fighter');
//     }, 2000);
// }).then(quote =>
// {
//     console.log(quote);
// }).catch(err=>
// {
//     console.log(err);
// });