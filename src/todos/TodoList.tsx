import React from 'react';
import NewTodoForm from "./NewtodoForm";
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos = [{ text: 'Hello'}] }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {
            todos.map(todo => <TodoListItem todo={todo}/>)
        }
    </div>
)

export default TodoList;