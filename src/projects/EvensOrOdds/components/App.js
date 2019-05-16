import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startGame, cancelGame, expandInstructions, collapseInstructions} from '../actions/settings.js';
import Instructions from './Instructions';
import {fetchNewDeck} from '../actions/decks';
import fetchStates from '../reducers/fetchStates.js';
import DrawCard from './DrawCard.js';
import Card from './Card.js';
import Guess from './Guess.js';
import GameState from './GameState.js';

class App extends Component 
{
    startGame = ()=>
    {
        this.props.startGame();
        this.props.fetchNewDeck();
    }

    render()
    {
        if (this.props.fetchState === fetchStates.error)
        {
            return (
                <div>
                    <p>Please try reloading the application. An error occured.</p>
                    <p>{this.props.message}</p>
                </div>
            )
        }
        return (
            <div>
                <h2>♠ ♡ Evens or Odds ♢ ♣</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3>The game is on!</h3>
                            <GameState />
                            <br />
                            <Guess />
                            <br />
                            <DrawCard />
                            <hr />
                            <Card />
                            <hr />
                            <button onClick={this.props.cancelGame}>Cancel Game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits...</h3>
                            <br />
                            <button onClick={this.startGame}>Start Game</button>
                            <hr />
                            <Instructions />
                        </div>
                    )
                }
            </div>
        )
    }
}

// This function specifies what part of the global state
// object gets mapped to the app components props
const mapStateToProps = (state)=>
{
    const {
        settings: {gameStarted},
        deck: {fetchState, message}
    } = state;
    
    return {
        gameStarted,
        fetchState,
        message
    };
}

// This function maps action dispatches to props
// const mapDispatchToProps = (dispatch)=>
// {
//     return {
//         startGame: ()=> dispatch(startGame()),
//         cancelGame: ()=> dispatch(cancelGame()),
//         fetchNewDeck: ()=> dispatch(fetchNewDeck())
//     };
// }

const componentConnector = connect(
    mapStateToProps,
    {
        startGame, cancelGame, fetchNewDeck
    });

// This function connects the child component to the global
// store object provided by the higher order wrapper component
// wrapped around the App component.
export default componentConnector(App);

/* 
Redux parts:
Store - Global object that contains the state of the entire
application.
Reducers - Describes sections of the store and how they
should update.
Actions - Objects that contain data for the store.
*/