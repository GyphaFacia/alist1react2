import axios from 'axios'
import {addHint} from './hintsReducer'

const defaultState = {
    lists: [],
}

// /api/rates/addtolist << token, list, title
// /api/rates/getlistnames << token
// /api/rates/getlist << token, list
// /api/rates/getalllists << token
const API = 'https://frozen-ocean-51941.herokuapp.com/api'

// /api/rates/getalllists << token
export const fetchGetAllLists = (token) => async (dispatch) =>{
    token = token ? token : localStorage.getItem('token')
    if(!token){
        dispatch({type: 'setShowSignInModal', payload: true})
        return false
    }
    try {
        const link = `${API}/rates/getalllists`
        const headers = {'Content-Type': 'application/json'}
        const body = {token}
        const {data} = await axios.post(link, body, {headers})
        dispatch({type: 'setLists', payload: data.message})
    } catch (e) {
        console.warn(e)
        dispatch(addHint('Error loading lists', 0, 'error'))
    }
}

// /api/rates/addtolist << token, list, title
export const fetchAddToList = (list, title, token) => async (dispatch) =>{
    token = token ? token : localStorage.getItem('token')
    if(!token){
        dispatch({type: 'setShowSignInModal', payload: true})
        return false
    }
    try {
        const link = `${API}/rates/addtolist`
        const headers = {'Content-Type': 'application/json'}
        const body = {token, list, title}
        const {data} = await axios.post(link, body, {headers})
        dispatch({type: 'setLists', payload: data.message})
        dispatch(addHint(`Title added to ${list} list`))
    } catch (e) {
        console.warn(e)
        dispatch(addHint('Error adding title to list', 0, 'error'))
    }
}

// /api/rates/removefromlist << token, list, title
export const fetchRemoveFromList = (list, title, token) => async (dispatch) =>{
    token = token ? token : localStorage.getItem('token')
    if(!token){
        dispatch({type: 'setShowSignInModal', payload: true})
        return false
    }
    try {
        const link = `${API}/rates/removefromlist`
        const headers = {'Content-Type': 'application/json'}
        const body = {token, list, title}
        console.log('here');
        const {data} = await axios.post(link, body, {headers})
        dispatch({type: 'setLists', payload: data.message})
        dispatch(addHint(`Title removed from ${list} list`))
    } catch (e) {
        dispatch(addHint('Error removing title from list', 0, 'error'))
    }
}

export const setLists = (payload)=>({type: 'setLists', payload})

export const listsReducer = (state = defaultState, action)=>{
    const {payload, type} = action
    switch (type) {
      // case 'setVal': return {...state, val: payload}
      case 'setLists': return {...state, lists: payload}
      default:
          return state
    }
}














