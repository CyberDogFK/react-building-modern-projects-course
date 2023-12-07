import React from 'react';
import {connect} from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {markTodoAsCompleted, removeTodo} from './actions';
import './TodoList.css';

const TodoList = ({todos = [], onRemovePressed, onCompletedPressed}:
                      {
                          todos: any[], onRemovePressed: any, onCompletedPressed: any
                      }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}/>)}
    </div>
);

const mapStateToProps = (state: any) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch: any) => ({
    onRemovePressed: (text: any) => dispatch(removeTodo(text)),
    onCompletedPressed: (text: any) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);