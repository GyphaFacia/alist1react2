import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {modalsReducer} from './modalsReducer'

const rootReducer = combineReducers({
    modals : modalsReducer,
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store












