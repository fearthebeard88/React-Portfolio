import {DECK, DECK_DRAW} from './types';
// const API_ADDRESS = 'https://deck-of-cards-api-wrapper.appspot.com/'
const API_ADDRESS = 'https://deckofcardsapi.com/api/deck/';

export const fetchDeckResult = (deckJson)=>
{
    const {remaining, deck_id} = deckJson;
    return {
        type: DECK.FETCH_SUCCESS,
        remaining, deck_id
    };
}

export const fetchDeckError = (error)=>
{
    return {
        type: DECK.FETCH_ERROR,
        message: error.message
    };
};

export const fetchNewDeck = ()=> (dispatch)=>
{
    return fetch(`${API_ADDRESS}new/shuffle/?deck_count=1`)
        .then(response=>
        {
            if (response.status != 200)
            {
                throw new Error('Unable to fetch deck.');
            }

            return response.json();
        })
        .then(json=> dispatch(fetchDeckResult(json)))
        .catch(error=> dispatch(fetchDeckError(error)));
};

export const fetchDrawCard = (deck_id)=> (dispatch)=>
{
    return fetch(`${API_ADDRESS}${deck_id}/draw/?count=1`)
    .then(response=>
    {
        if (response.status != 200)
        {
            throw new Error('Unable to draw card.');
        }

        return response.json();
    }).then(json=> dispatch({
        type: DECK_DRAW.FETCH_SUCCESS,
        cards: json.cards,
        remaining: json.remaining
    }))
    .catch(error=> dispatch({
        type: DECK_DRAW.FETCH_ERROR,
        message: error.message
    }));
};