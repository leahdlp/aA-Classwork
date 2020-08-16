import { combineReducers } from 'redux';
import { entitiesReducer } from './entities_reducer'

export const rootReducer = combineReducers({
    entities: entitiesReducer
});
