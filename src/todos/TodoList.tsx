import React from 'react';
import NewTodoForm from "./NewtodoForm";
import TodoListItem from './TodoListItem';
import './TodoList.css';

export class Todo {
    text: string;
    isCompleted: boolean;
    constructor(text: string, isCompleted: boolean) {
        this.text = text;
        this.isCompleted = isCompleted;
    }
}

const TodoList = ({ todos = [new Todo('Hello', false)] }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {
            todos.map((todo: Todo) => <TodoListItem todo={todo}/>)
        }
    </div>
)

export default TodoList;