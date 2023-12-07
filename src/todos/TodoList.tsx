import React from 'react';
import NewTodoForm from "./NewtodoForm";
import TodoListItem from './TodoListItem';
import './TodoList.css';

export class Todo {
    constructor(public text: string) {
    }
}

const TodoList = ({ todos = [new Todo('Hello')] }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {
            todos.map((todo: Todo) => <TodoListItem todo={todo}/>)
        }
    </div>
)

export default TodoList;