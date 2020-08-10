import React from 'react'; 
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

export default (props) => {
    return (
        <div>
            <ul>
                {props.todos.map((todo, idx) =>
                    <li key={idx}><TodoListItem title={todo.title} /></li>
                )}
            </ul>
            <TodoForm receiveTodo={props.receiveTodo}/>
        </div>
    )
}