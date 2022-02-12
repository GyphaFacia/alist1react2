import axios from 'axios'
import {addHint} from './hintsReducer'

const defaultState = {
    rates: [],
}

// /api/rates/getrates << token
// /api/rates/setrate << token, title, rate
const API = 'https://frozen-ocean-51941.herokuapp.com/api'

export const fetchRates = (token) => async (dispatch) =>{
    token = token ? token : localStorage.getItem('token')
    if(!token){
        dispatch({type: 'setShowSignInModal', payload: true})
        return false
    }
    try {
        const link = `${API}/rates/getrates`
        const headers = {'Content-Type': 'application/json'}
        const body = {token}
        const {data} = await axios.post(link, body, {headers})
        dispatch({type: 'setRates', payload: data.message})
    } catch (e) {
        dispatch(addHint('Что-то пошло не так', 0, 'error'))
        console.warn(e)
    }
}

export const fetchSetRate = (title, rate, token) => async (dispatch) =>{
    token = token ? token : localStorage.getItem('token')
    if(!token){
        dispatch({type: 'setShowSignInModal', payload: true})
        return false
    }
    try {
        const link = `${API}/rates/setrate`
        const headers = {'Content-Type': 'application/json'}
        const body = {token, title, rate}
        const {data} = await axios.post(link, body, {headers})
        console.log(data);
        dispatch({type: 'setRates', payload: data.message})
        dispatch(addHint('Оценка сохранена'))
    } catch (e) {
        console.warn(e)
        dispatch(addHint('Что-то пошло не так', 0, 'error'))
    }
}

export const setRates = (payload)=>({type: 'setRates', payload})

export const ratesReducer = (state = defaultState, action)=>{
  const {payload, type} = action
  switch (type) {
      // case 'setVal': return {...state, val: payload}
      case 'setRates': return {...state, rates: payload}
      default:
          return state
  }
}














