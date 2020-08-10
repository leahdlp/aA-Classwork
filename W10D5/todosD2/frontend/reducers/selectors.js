export const allTodos = (state) => {
    let keys = Object.keys(state.todos);  
    
    return keys.map((key) => state.todos[key]);
}