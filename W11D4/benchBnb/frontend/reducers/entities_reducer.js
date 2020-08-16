import { combineReducers } from 'redux';
import usersReducer from './users/users_reducer';
import benchesReducer from './benches/benches_reducer'

export default combineReducers({
    users: usersReducer,
    benches: benchesReducer
})