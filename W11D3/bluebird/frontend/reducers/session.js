//after finishing actions

// for type switch cases
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

// create default state for our session
// POJO to be returned if we don't have a current user
const _nullSession = {
    currentUser: null
}

// session reducer:
// no currentUser being the default, we assume not logged in unless otherwise stated
// action should pass in a POJO from action creator that contains a type and a
// payload (optional)
export default (oldState=_nullSession, action) => {
    Object.freeze(oldState);
    // let nextState = Object.assign({}, )
    switch (action.type) {
        // logging the user in
        // in this case the payload will be a user object nested with the key of user
        case RECEIVE_CURRENT_USER:
            // we don't have to worry about what state was before because this
            // currentUser is all we care about, no the old one
            return Object.assign({}, { currentUser: action.user })
        // logging the user out so no payload:
        case LOGOUT_CURRENT_USER:
            // _nullSession is the state where there is no currentUser... logging
            // out means there is no currentUser
            // this still updates the state because it is a new object with a new
            // object id, so it doesn't matter that we default to this if no state
            // is passed in, we still want to return this and not oldState
            return _nullSession
        // for the event that none of these cases are hit!
        default:
            // we go ahead and return the previous state because nothing has been
            // changed or updated in this reducer
            return oldState;
    }
}

// last step is to update the root reducer to add this reducer into the it with the
// combine reducer method