import {GAME_STARTED, INSTRUCTIONS_EXPANDED} from './types.js';

export const startGame = ()=>
{
    return {
        // Type identifier
        type: GAME_STARTED,
        // New state
        gameStarted: true
    };
};

export const cancelGame = ()=>
{
    return {
        type: GAME_STARTED,
        gameStarted: false
    }
}

export const expandInstructions = ()=>
{
    return {
        type: INSTRUCTIONS_EXPANDED,
        instructionsExpanded: true
    };
}

export const collapseInstructions = ()=>
{
    return {
        type: INSTRUCTIONS_EXPANDED,
        instructionsExpanded: false
    };
}