import { pokemonReducer } from './pokemon_reducer';
import { combineReducers } from 'redux'

export const entitiesReducer = combineReducers({
  pokemon: pokemonReducer
});