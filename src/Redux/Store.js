import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {modalsReducer} from './modalsReducer'
import {searchReducer} from './searchReducer'
import {ratesReducer} from './ratesReducer'
import {listsReducer} from './listsReducer'
import {authReducer} from './authReducer'
import {hintsReducer} from './hintsReducer'

const rootReducer = combineReducers({
    modals : modalsReducer,
    search : searchReducer,
    rates: ratesReducer,
    lists: listsReducer,
    auth: authReducer,
    hints: hintsReducer,
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store












