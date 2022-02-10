import axios from 'axios'

const defaultState = {
    token: localStorage.getItem('token'),
    authError: false,
    showSignInModal: true,
}

const API = 'https://frozen-ocean-51941.herokuapp.com/api'

// /api/auth/register << login, password
export const fetchRegister = (login, password) => async (dispatch) =>{
    const link = `${API}/auth/register`
    const headers = {'Content-Type': 'application/json'}
    const body = {login, password}
    const {data} = await axios.post(link, body, {headers})
}

// /api/auth/login << login, password
export const fetchLogin = (login, password) => async (dispatch) =>{
    const link = `${API}/auth/login`
    const headers = {'Content-Type': 'application/json'}
    const body = {login, password}
    const {data} = await axios.post(link, body, {headers})
    console.log(data);
    dispatch({type: 'setToken', payload: data.token})
    localStorage.setItem('token', data.token)
}

export const logOut = () => async (dispatch) =>{
    dispatch({type: 'setToken', payload: ''})
    localStorage.setItem('token', '')
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














