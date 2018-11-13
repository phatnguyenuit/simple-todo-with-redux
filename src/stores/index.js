import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'


// middlewares
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger();

export default createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
)