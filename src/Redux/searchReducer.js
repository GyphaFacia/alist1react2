import axios from 'axios'
import {addHint} from './hintsReducer'

const defaultState = {
    searchItems: [],
    currentItem: {},
    showTitleModal: false,
    searchInputValue: '',
    searchIsLoading: true,
    searchInputFocus: false,
}

const API = 'https://frozen-ocean-51941.herokuapp.com/api'

// /api/alist/search << search
export const fetchSearchPage = (searchReq) => async (dispatch) =>{
    try {
        dispatch(addHint('Ищем...', 2000))
        const link = `${API}/alist/search?search=${searchReq}`
        const {data} = await axios.get(link)
        dispatch({type: 'setSearchItems', payload: data.message})
    } catch (e) {
        console.warn(e)
        dispatch(addHint('Сбой поиска', 0, 'error'))
    }
}
// /api/alist/item << titleId
export const fetchItemPage = (titleId) => async (dispatch) =>{
    try {
        titleId = titleId.split('animes/').pop()
        dispatch(addHint('Загружаю...', 2000))
        const link = `${API}/alist/item?link=${titleId}`
        const {data} = await axios.get(link)
        dispatch({type: 'setCurrentItem', payload: data.message})
        dispatch({type: 'setShowTitleModal', payload: true})
    } catch (e) {
        console.warn(e)
        dispatch(addHint('Сбой загрузки доп. инфо', 0, 'error'))
    }
}

export const setSearchItems = (payload)=>({type: 'setSearchItems', payload})
export const setCurrentItem = (payload)=>({type: 'setCurrentItem', payload})
export const setSearchInputValue = (payload)=>({type: 'setSearchInputValue', payload})
export const setSearchInputFocus = (payload)=>({type: 'setSearchInputFocus', payload})
export const setShowTitleModal = (payload)=>({type: 'setShowTitleModal', payload})

export const searchReducer = (state = defaultState, action)=>{
    const {payload, type} = action
    switch (type) {
      case 'setSearchItems': return {...state, searchItems: payload}
      case 'setCurrentItem': return {...state, currentItem: payload}
      case 'setSearchInputValue': return {...state, searchInputValue: payload}
      case 'setShowTitleModal': return {...state, showTitleModal: payload}
      default:
          return state
    }
}














