import { connect } from 'react-redux';
import TodoList from './todo_list'; 
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors'; 

const mapStateToProps = state => ({
    todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    receiveTodos: todos => dispatch(receiveTodos(todos))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);