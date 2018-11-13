import React from 'react'
import ToDo from './ToDo'
import PropTypes from 'prop-types'


const ToDoList = ({todos, toggleToDo, getAsyncToDos, isLoading, error}) => {
    return (
        <div>
            <h1>My ToDos</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {isLoading && <p style={{color: 'grey'}}>Loadingggg....</p>}
            <ul>
            {!isLoading && !error && todos.map(todo => (
                <ToDo 
                    key={todo.id} 
                    {...todo} 
                    onToggle={() => toggleToDo(todo.id)}
                />
            ))}
            </ul>
            <button onClick={() => getAsyncToDos('https://jsonplaceholder.typicode.com/todos?userId=1')}>Get async ToDos</button>
        </div>
    )
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            value: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    toggleToDo: PropTypes.func.isRequired,
    getAsyncToDos: PropTypes.func
}

export default ToDoList;