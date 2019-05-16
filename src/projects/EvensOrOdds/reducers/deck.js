import {DECK, DECK_DRAW} from '../actions/types.js';
import fetchStates from './fetchStates.js';

const DEFAULT_DECK = {
    deck_id: '',
    remaining: 0,
    fetchState: '',
    message: '',
    cards: []
};

const deckReducer = (state = DEFAULT_DECK, action)=>
{
    let remaining, deck_id, cards;

    switch(action.type)
    {
        case DECK.FETCH_SUCCESS:
        ({remaining, deck_id} = action);
        return {
            ...state,
            remaining,
            deck_id,
            fetchState: fetchStates.success
        };
        case DECK.FETCH_ERROR:
        return {
            ...state,
            message: action.message,
            fetchState: fetchStates.error
        };
        case DECK_DRAW.FETCH_SUCCESS:
        ({cards, remaining} = action);
        console.log(cards);
        return {
            ...state,
            cards,
            remaining,
            fetchState: fetchStates.success
        };
        case DECK_DRAW.FETCH_ERROR:
        return {
            ...state,
            message: action.message,
            fetchState: fetchStates.error
        };
        default:
        return state
    }
}

export default deckReducer;