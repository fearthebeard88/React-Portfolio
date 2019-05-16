import {
    GAME_STARTED,
    INSTRUCTIONS_EXPANDED
} from '../actions/types.js';

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
};

const settingsReducer = (state = DEFAULT_SETTINGS, action)=>
{
    switch(action.type)
    {
        case GAME_STARTED:
        return {
            ...state,
            gameStarted: action.gameStarted
        };
        case INSTRUCTIONS_EXPANDED:
        return {
            ...state,
            instructionsExpanded: action.instructionsExpanded
        };
        default:
        return state
    }
}

export default settingsReducer;