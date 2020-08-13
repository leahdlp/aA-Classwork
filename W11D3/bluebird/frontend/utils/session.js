// first thing we did
// making ajax requests to db in order to create, login, or logout a user
import { $CombinedState } from "redux"

// creating a user
// name by http method we wil be using
export const postUser = user => {
    $.ajax({
        url: '/api/users',
        method: 'POST', 
        data: { user } 
    })
}

// loging in a user
export const postSession = user => {
    $.ajax({
        url: '/api/session', 
        method: 'POST',
        data: { user }
    })
}

// logging out a user
export const deleteSession = () => {
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
}