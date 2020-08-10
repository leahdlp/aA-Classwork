import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions"; 

const todosReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    let nextState = Object.assign({}, oldState); 

    switch (action.type) {
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo; 
            return nextState;  
        case RECEIVE_TODOS:
            for (let i = 0; i < action.todos.length; i++) {
                let todo = action.todos[i]; 
                nextState[todo.id] = todo;
            }
            return nextState;
            // {...action.todos}
        default:
            return oldState;
    }
}

export default todosReducer; 
