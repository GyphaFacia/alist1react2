import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {modalsReducer} from './modalsReducer'
import {searchReducer} from './searchReducer'

const rootReducer = combineReducers({
    modals : modalsReducer,
    search : searchReducer,
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store












