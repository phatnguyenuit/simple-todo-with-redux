// Action Creators
// It is a plan function to create a plain action object
import {ADD_TODO, TOGGLE_TODO, GET_TODOS_PENDING, GET_TODOS_FAILURE, GET_TODOS_SUCCESS, SET_VISIBILITY_FILTER} from '../constants'
import { uniqueId } from 'lodash'

// ToDo actions
export const actionAddToDo = (value) => ({
    type: ADD_TODO,
    id: uniqueId('TODO_'),
    value
})


export const actionToggeToDo = (id) => ({
    type: TOGGLE_TODO,
    id
})

// Call API to get todos
const actionGetTodosPending = () => ({
    type: GET_TODOS_PENDING
})

const actionGetTodosSuccess = (data) => ({
    type: GET_TODOS_SUCCESS,
    data
})

const actionGetTodosFailure = (error) => ({
    type: GET_TODOS_FAILURE,
    error
})

export const actionGetAsyncTodos = url => dispatch => {
    dispatch(actionGetTodosPending())
    fetch(url)
    .then(res => res.json())
    .then(data => {
        dispatch(actionGetTodosSuccess(data))
    })
    .catch(error => {
        dispatch(actionGetTodosFailure(error.message))
    })
}

// Filter
export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})