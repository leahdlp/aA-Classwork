// after finishing session utils

// create actions for api utils (ajax calls) that feed to reducers
import { postUser, postSession, deleteSession } from '../utils/session';

//create type constants for debugging
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

// create action creators
const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

// doesn't need a payload, we should already know who the current user is in our
// state
const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

// after finishing regular action creators

// thunk action creators to connect api utils:
// named for the action it performs
// will build form later but the form is where we get this info from
// postUser(formUser) is making the ajax call
export const createNewUser = formUser => dispatch => postUser(formUser)
    // chain on a then to the ajax call's promise that says if we successfully
    // find a user (our user parameter), then give it to our action creator
    // which will feed it to our reducer (and update state)
    .then(user => dispatch(receiveCurrentUser(user)));

// named for the action ir performs
export const loginUser = formUser => dispatch => postSession(formUser)
    // upon successful login of our user from the backend we want to send
    // that user thru the action creator to the reducer to update state
    .then(user => dispatch(receiveCurrentUser(user)));

// dont need to fill out any form data or take any data in in order to logout the
// current user... both our backend and frontend should already know who that is
export const logout = () => dispatch => deleteSession()
    // the backend won't return any data upon succcessful logout, so we just have
    // a parameter-less callback that dispatches our invoked action creator to 
    // update the reducer and therefore state
    .then(() => dispatch(logoutCurrentUser()))

// next we head to reducers