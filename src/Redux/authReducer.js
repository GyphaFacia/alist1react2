import axios from 'axios'
import {addHint} from './hintsReducer'

const defaultState = {
    token: localStorage.getItem('token'),
    authError: false,
    showSignInModal: true,
}

const API = 'https://frozen-ocean-51941.herokuapp.com/api'

// /api/auth/register << login, password
export const fetchRegister = (login, password) => async (dispatch) =>{
    try {
        const link = `${API}/auth/register`
        const headers = {'Content-Type': 'application/json'}
        const body = {login, password}
        const {data} = await axios.post(link, body, {headers})
        dispatch(addHint('User created'))
    } catch (e) {
        dispatch(addHint('Something went wrong', 0, 'error'))
        console.warn(e)
    }
}

// /api/auth/login << login, password
export const fetchLogin = (login, password) => async (dispatch) =>{
    try {
        const link = `${API}/auth/login`
        const headers = {'Content-Type': 'application/json'}
        const body = {login, password}
        const {data} = await axios.post(link, body, {headers})
        dispatch({type: 'setToken', payload: data.token})
        localStorage.setItem('token', data.token)
        dispatch(addHint('Logged in'))
    } catch (e) {
        dispatch(addHint('Something went wrong', 0, 'error'))
        console.warn(e)
    }
}

export const logOut = () => async (dispatch) =>{
    try {
        dispatch({type: 'setToken', payload: ''})
        localStorage.setItem('token', '')
        dispatch(addHint('Logged out'))
    } catch (e) {
        console.warn(e)
    }
}

export const setToken = (payload)=>({type: 'setToken', payload})
export const setShowSignInModal = (payload)=>({type: 'setShowSignInModal', payload})

export const authReducer = (state = defaultState, action)=>{
    const {payload, type} = action

    console.log(type)
    console.groupCollapsed('show')
    console.dir(payload);
    console.groupEnd()

    switch (type) {
      case 'setShowSignInModal': return {...state, showSignInModal: payload}
      case 'setToken': return {...state, token: payload}
      default:
          return state
    }
}














