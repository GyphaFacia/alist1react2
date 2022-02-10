import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {modalsReducer} from './modalsReducer'
import {searchReducer} from './searchReducer'
import {ratesReducer} from './ratesReducer'

const rootReducer = combineReducers({
    modals : modalsReducer,
    search : searchReducer,
    rates: ratesReducer,
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store












