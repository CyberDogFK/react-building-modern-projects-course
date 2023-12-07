import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from "./NewtodoForm";
import TodoListItem from './TodoListItem';
import { removeTodo } from './actions';
import './TodoList.css';

export class Todo {
    text: string;
    isCompleted: boolean;
    constructor(text: string, isCompleted: boolean) {
        this.text = text;
        this.isCompleted = isCompleted;
    }
}

const TodoList = ({ todos = [], onRemovePressed} : {todos: Todo[], onRemovePressed: any}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {
            todos.map((todo: Todo) => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}/>)
        }
    </div>
)

const mapStateToProps = (state: any) => ({
    todos: state.todos,
});
const mapDispatchToProps = (dispatch: any) => ({
    onRemovePressed: (text: string) => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);