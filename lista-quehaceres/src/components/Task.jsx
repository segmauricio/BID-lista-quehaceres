import React, { useState, useEffect } from "react";
import './Task.css';
import Todo from './Todo'

const Task = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (!name) return

        setTasks([...tasks, {
            id: Date.now(),
            name,
            complete: false,
        }])
        setName("")
    }

    function toggleTodo(todoToToggle) {
        setTasks(tasks.map(todo => {
            if (todoToToggle.id === todo.id) {
                return { ...todo, complete: !todo.complete }
            }
            return todo
        }))
    }

    function deleteTodo(todoToDelete) {
        setTasks(tasks.filter(todo => todo.id !== todoToDelete.id))
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <>
        <form className='formita' onSubmit={handleSubmit}>
            <input
                className='taskGenerator'
                type='text'
                placeholder='Write here your new task...'
                value={name}
                onChange={e => setName(e.target.value.trim())} />
            <input
                className='submit-btn'
                type="submit"
                value="Add" />
            </form>
            {tasks.map(todo => {
                return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            })}
        </>
    )
}

export default Task;