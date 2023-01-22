import React from "react";
import './Todo.css'

const Todo = ({todo, toggleTodo, deleteTodo}) => {
    return (<div className='toDoList'>
        <p className={todo.complete ? "complete-task" : ""}>{todo.name}</p>
        <div>
            <input className='checkmark' type='checkbox' onChange={() => toggleTodo(todo)} checked={todo.complete}></input>
            <button className='delete-btn' onClick={() => deleteTodo(todo)}>Delete</button>
        </div>
    </div>)
}

export default Todo;

