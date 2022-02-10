import axios from 'axios'

const testToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmVmNTNhOTkyMWU1ZDgyZTA0NDVmMCIsImxvZ2luIjoiR3lwaGFjaWEiLCJpYXQiOjE2NDQ1MTc3MDAsImV4cCI6MTY0NDU0NjUwMH0.mZRdVtxW_lQrbrkg0mB4_dHhYENMVP_udKNdbkI0-EU"

const defaultState = {
    lists: [],
}

// /api/rates/addtolist << token, list, title
// /api/rates/getlistnames << token
// /api/rates/getlist << token, list
// /api/rates/getalllists << token
const API = 'https://frozen-ocean-51941.herokuapp.com/api'

// /api/rates/getalllists << token
export const fetchGetAllLists = (token = testToken) => async (dispatch) =>{
    const link = `${API}/rates/getalllists`
    const headers = {'Content-Type': 'application/json'}
    const body = {token}
    const {data} = await axios.post(link, body, {headers})
    dispatch({type: 'setLists', payload: data.message})
}

// /api/rates/addtolist << token, list, title
export const fetchAddToList = (list, title, token = testToken) => async (dispatch) =>{
    const link = `${API}/rates/addtolist`
    const headers = {'Content-Type': 'application/json'}
    const body = {token, list, title}
    const {data} = await axios.post(link, body, {headers})
    dispatch({type: 'setLists', payload: data.message})
}

// /api/rates/removefromlist << token, list, title
export const fetchRemoveFromList = (list, title, token = testToken) => async (dispatch) =>{
    const link = `${API}/rates/removefromlist`
    const headers = {'Content-Type': 'application/json'}
    const body = {token, list, title}
    console.log('here');
    const {data} = await axios.post(link, body, {headers})
    dispatch({type: 'setLists', payload: data.message})
}

export const setLists = (payload)=>({type: 'setLists', payload})

export const listsReducer = (state = defaultState, action)=>{
    const {payload, type} = action

    console.log(type)
    console.groupCollapsed('show')
    console.dir(payload);
    console.groupEnd()

    switch (type) {
      // case 'setVal': return {...state, val: payload}
      case 'setLists': return {...state, lists: payload}
      default:
          return state
    }
}













