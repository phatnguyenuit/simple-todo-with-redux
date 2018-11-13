import React from 'react'
import { connect } from 'react-redux'
import { actionAddToDo } from '../actions'

const ContainerAddToDo = ({ dispatch }) => {
    let input
    return (
        <div>
            <form onSubmit={ e => {
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatch(actionAddToDo(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">
                    Add ToDo
                </button>
            </form>
        </div>
    )
}

export default connect()(ContainerAddToDo)