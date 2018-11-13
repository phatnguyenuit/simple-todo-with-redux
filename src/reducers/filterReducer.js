import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../constants'

// This is a pure function to return a new state with prevState and action as the two params 
const filterReducer = (prevState=VisibilityFilters.SHOW_ALL, action={}) => {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return prevState
    }
}

export default filterReducer