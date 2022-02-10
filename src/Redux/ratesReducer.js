import axios from 'axios'

const defaultState = {
    rates: [],
}

// /api/rates/getrates << token
// /api/rates/setrate << token, title, rate
const API = 'https://frozen-ocean-51941.herokuapp.com/api'

export const fetchRates = (token) => async (dispatch) =>{
    const link = `${API}/rates/getrates`
    const headers = {'Content-Type': 'application/json'}
    const body = {token}
    const {data} = await axios.post(link, body, {headers})
    console.log(data);
    dispatch({type: 'setRates', payload: data.message})
}

export const fetchSetRate = (title, rate, token ) => async (dispatch) =>{
    const link = `${API}/rates/setrate`
    const headers = {'Content-Type': 'application/json'}
    const body = {token, title, rate}
    const {data} = await axios.post(link, body, {headers})
    console.log(data);
    dispatch({type: 'setRates', payload: data.message})
}

export const setRates = (payload)=>({type: 'setRates', payload})

export const ratesReducer = (state = defaultState, action)=>{
  const {payload, type} = action
  
  console.log(type)
  console.groupCollapsed('show')
  console.dir(payload);
  console.groupEnd()
  
  switch (type) {
      // case 'setVal': return {...state, val: payload}
      case 'setRates': return {...state, rates: payload}
      default:
          return state
  }
}














