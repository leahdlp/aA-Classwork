import React from 'react'
import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER
} from '../../actions/session_actions';

const nullSessionState = {
    id: null
}

const sessionReducer = (oldState=nullSessionState, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.currentUser.id })
        case LOGOUT_CURRENT_USER:
            return nullSessionState
        default:
            return oldState;
    }
}

export default sessionReducer;