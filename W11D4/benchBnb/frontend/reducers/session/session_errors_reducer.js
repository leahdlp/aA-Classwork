import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../../actions/session_actions';

const sessionErrorsReducer = (oldState=[], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ERRORS:
            // console.log(action.errors)
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;