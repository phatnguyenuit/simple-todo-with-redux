import { connect } from 'react-redux'
import ToDoList from '../components/ToDoList'

import { actionToggeToDo, actionGetAsyncTodos } from '../actions'
import { VisibilityFilters } from '../constants'


const getFilteredTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

// Map STATE to PROPS method to handle event in the 
// connected Component
const mapStateToProps = currentState  => ({
    todos: getFilteredTodos(currentState.toDoReducer.todos, currentState.filterReducer),
    isLoading: currentState.toDoReducer.isLoading,
    error: currentState.toDoReducer.error
})

// Map DISPATCH to PROPS method to handle event in the 
// connected Component
const mapDispatchToProps = dispatch => ({
    toggleToDo: id => dispatch(actionToggeToDo(id)),
    getAsyncToDos: url => dispatch(actionGetAsyncTodos(url)),
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ToDoList)