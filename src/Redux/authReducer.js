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
        dispatch(addHint('Пользователь создан'))
    } catch (e) {
        dispatch(addHint('Что-то пошло не так', 0, 'error'))
        dispatch(logOut('silent'))
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
        dispatch(addHint('Вы вошли в аккаунт'))
    } catch (e) {
        dispatch(addHint('Что-то пошло не так', 0, 'error'))
        dispatch(logOut('silent'))
        console.warn(e)
    }
}

export function handleAuth(dispatch, token){
    token = token ? token : localStorage.getItem('token')
    if(!token){
        dispatch(logOut('silent'))
        dispatch({type: 'setShowSignInModal', payload: true})
        return false
    }
    else{
        return true
    }
}

export const logOut = (silent = false) => async (dispatch) =>{
    try {
        dispatch({type: 'setToken', payload: ''})
        localStorage.setItem('token', '')
        if(!silent){
            dispatch(addHint('Вы вышли из аккаунта'))
        }
    } catch (e) {
        console.warn(e)
    }
}

export const setToken = (payload)=>({type: 'setToken', payload})
export const setShowSignInModal = (payload)=>({type: 'setShowSignInModal', payload})

export const authReducer = (state = defaultState, action)=>{
    const {payload, type} = action
    switch (type) {
      case 'setShowSignInModal': return {...state, showSignInModal: payload}
      case 'setToken': return {...state, token: payload}
      default:
          return state
    }
}














