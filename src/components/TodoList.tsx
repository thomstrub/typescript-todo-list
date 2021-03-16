import React from 'react'

import TodoItem from './TodoItem'

import { TodoListInterface } from '../interface'
import ToDoItem from './TodoItem'

const ToDoList = (props: TodoListInterface) => {
    return (
        <div className="todo-list">
            <ul>
                {props.todos.map((todo) => (
                    <li key={todo.id}>
                        <ToDoItem 
                          todo = {todo}
                          handleTodoUpdate={props.handleTodoUpdate}
                          handleTodoRemove={props.handleTodoRemove}
                          handleTodoComplete={props.handleTodoComplete}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList