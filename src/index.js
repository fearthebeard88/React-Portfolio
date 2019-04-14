import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import History, {createBrowserHistory} from 'history';
import App from './components/App.js';
import './index.css';
import Jokes from './components/Jokes.js';
import Header from './components/Header.js';
import MusicMaster from './projects/music-master';

// React under the hood will evaluate an attribute to
// true if you do not specify it.
// example: exact === exact={true}

ReactDOM.render(
<Router history={createBrowserHistory()}>
    <Switch>
        <Route exact path='/' render={()=>{return <Header><App /></Header>}} />
        <Route path='/jokes' render={()=>{return <Header><Jokes /></Header>}} />
        <Route path='/music-master' render={()=>{return <Header><MusicMaster /></Header>}} />
    </Switch>
</Router>,
 document.getElementById('root'));

 // the render method/property is equivilent to using
 // component={<Component Name>}, but you can directly call
 // the component inside the render method and nest other
 // components inside it.

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