import {uniqueId} from 'lodash'
import {ADD_TODO, TOGGLE_TODO, GET_TODOS_PENDING, GET_TODOS_FAILURE, GET_TODOS_SUCCESS} from '../constants'

const initialState = {
    todos:[
        {
            id: uniqueId('TODO_'),
            value: 'Phat Nguyen ne!',
            completed: false
        }
    ],
    isLoading: false,
    error: ''
}
const todoReducer = (prevState=initialState, action={}) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...prevState,
                todos:[
                    ...prevState.todos,
                    {
                        id: action.id,
                        value: action.value,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...prevState,
                todos:
                    prevState.todos.map(todo  =>
                        (todo.id === action.id)
                        ? {...todo, completed: !todo.completed}
                        : todo
                    )
            }
        case GET_TODOS_PENDING:
            return {
                ...prevState,
                isLoading: true
            }
        case GET_TODOS_FAILURE:
            return {
                ...prevState,
                error: action.error,
                isLoading: false
            }
        case GET_TODOS_SUCCESS:
            var loadedData = action.data.map(todo => ({id: todo.id.toString(), value: todo.title, completed: todo.completed }))
            console.log(prevState.todos)
            console.log(loadedData)
            //TODO Get unique array of todos
            return {
                ...prevState,
                isLoading: false,
                error: '',
                todos: [
                    ...new Set([
                        ...prevState.todos,
                        ...loadedData
                    ])
                ]
            }
        default:
            return prevState
    }
}

export default todoReducer