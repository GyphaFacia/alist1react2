import axios from 'axios'
import {addHint} from './hintsReducer'

const searchRequestTestData = JSON.parse(`{"message":[{"title":"Стальной алхимик: Братство — Спецвыпуски","year":"2009","type":"Спешл","thumb":"https://shikimori.one/system/animes/original/6421.jpg","url":"https://shikimori.one/animes/z6421-fullmetal-alchemist-brotherhood-specials"},{"title":"Стальной алхимик: Священная звезда Милоса","year":"2011","type":"Фильм","thumb":"https://shikimori.one/system/animes/original/9135.jpg","url":"https://shikimori.one/animes/z9135-fullmetal-alchemist-the-sacred-star-of-milos"},{"title":"Стальной алхимик","year":"2003","type":"TV Сериал","thumb":"https://shikimori.one/system/animes/original/121.jpg","url":"https://shikimori.one/animes/z121-fullmetal-alchemist"},{"title":"Стальной алхимик: Завоеватель Шамбалы","year":"2005","type":"Фильм","thumb":"https://shikimori.one/system/animes/original/430.jpg","url":"https://shikimori.one/animes/z430-fullmetal-alchemist-the-conqueror-of-shamballa"},{"title":"Стальной алхимик: Размышления","year":"2005","type":"Спешл","thumb":"https://shikimori.one/system/animes/original/664.jpg","url":"https://shikimori.one/animes/z664-fullmetal-alchemist-reflections"},{"title":"Стальной алхимик: Братство","year":"2009","type":"TV Сериал","thumb":"https://shikimori.one/system/animes/original/5114.jpg","url":"https://shikimori.one/animes/z5114-fullmetal-alchemist-brotherhood"},{"title":"Стальной алхимик: Премиум коллекция","year":"2006","type":"OVA","thumb":"https://shikimori.one/system/animes/original/908.jpg","url":"https://shikimori.one/animes/z908-fullmetal-alchemist-premium-collection"},{"title":"Тяжёлый металл: Цельнометаллический солдат","year":"1987","type":"OVA","thumb":"https://shikimori.one/system/animes/original/2601.jpg","url":"https://shikimori.one/animes/2601-juusenki-l-gaim-iii-full-metal-soldier"}]}`)

const itemRequestTestData = JSON.parse(`{"message":[{"title":"Эрго Прокси","year":"2006","type":"TV Сериал","thumb":"https://nyaa.shikimori.one/system/animes/original/790.jpg?1633691726","url":"https://shikimori.one/animes/z790-ergo-proxy"}]}`);

const defaultState = {
    searchItems: searchRequestTestData.message,
    currentItem: itemRequestTestData.message,
    showTitleModal: true,
    searchInputValue: '',
    searchIsLoading: true,
    searchInputFocus: false,
}

const API = 'https://frozen-ocean-51941.herokuapp.com/api'

// /api/alist/search << search
export const fetchSearchPage = (searchReq) => async (dispatch) =>{
    try {
        dispatch(addHint('Searching...', 2000))
        const link = `${API}/alist/search?search=${searchReq}`
        const {data} = await axios.get(link)
        dispatch({type: 'setSearchItems', payload: data.message})
    } catch (e) {
        console.warn(e)
        dispatch(addHint('Error while searching', 0, 'error'))
    }
}
// /api/alist/item << titleId
export const fetchItemPage = (titleId) => async (dispatch) =>{
    try {
        titleId = titleId.split('animes/').pop()
        dispatch(addHint('Loading...', 2000))
        const link = `${API}/alist/search?search=${titleId}`
        const {data} = await axios.get(link)
        dispatch({type: 'setCurrentItem', payload: data.message})
    } catch (e) {
        console.warn(e)
        dispatch(addHint('Error while loading title info', 0, 'error'))
    }
}

export const setSearchItems = (payload)=>({type: 'setSearchItems', payload})
export const setCurrentItem = (payload)=>({type: 'setCurrentItem', payload})
export const setSearchInputValue = (payload)=>({type: 'setSearchInputValue', payload})
export const setSearchInputFocus = (payload)=>({type: 'setSearchInputFocus', payload})
export const setShowTitleModal = (payload)=>({type: 'setShowTitleModal', payload})

export const searchReducer = (state = defaultState, action)=>{
    const {payload, type} = action

    console.log(type)
    console.groupCollapsed('show')
    console.dir(payload);
    console.groupEnd()

    switch (type) {
      case 'setSearchItems': return {...state, searchItems: payload}
      case 'setCurrentItem': return {...state, currentItem: payload}
      case 'setSearchInputValue': return {...state, searchInputValue: payload}
      case 'setShowTitleModal': return {...state, showTitleModal: payload}
      default:
          return state
    }
}














