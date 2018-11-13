import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({value, completed, onToggle}) => {
    let style = {textDecoration: completed ? "line-through": "none"};
    return (
        <li style={style} onClick={onToggle}>{value}</li>
    )
}

ToDo.propTypes = {
    onToggle: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired
}

export default ToDo;