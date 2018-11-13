// connect function
import { connect } from 'react-redux'
// component
import Link from '../components/Link'
// action
import { setVisibilityFilter } from '../actions'

// ownProps is stand for current props of connected component and 
// this function will be re-invoked when this component receive a new props
const mapStateToProps = (prevState, ownProps) => ({
    active: ownProps.filter === prevState.filterReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
