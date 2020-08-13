import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session';

// update after finishing each reducer

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer
});
