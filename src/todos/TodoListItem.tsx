import React from 'react';
import './TodoListItem.css';
import {Todo} from "./TodoList";

const TodoListItem = ({ todo, onRemovePressed }: {todo: Todo, onRemovePressed: any}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button className="completed-button">Mark as Completed</button>
            <button
                onClick={() => onRemovePressed(todo.text)}
                className="remove-button">Remove</button>
        </div>
    </div>
)

export default TodoListItem;