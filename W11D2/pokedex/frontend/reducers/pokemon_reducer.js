import React from 'react';
import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";

export const pokemonReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = {...oldState};
    
    switch (action.type) {
        case RECEIVE_ALL_POKEMON: 
            for (let id in action.pokemon) {
                nextState[id] = action.pokemon[id]
            }
            return nextState;
        default:
            return oldState;
    }
}

