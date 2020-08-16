import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session/session_reducer';
import errorsReducer from './session/errors_reducer'

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
})