import axios from 'axios'

const testSearchData = JSON.parse(`{
    "message": [
        {
            "title": "Стальной алхимик: Братство — Спецвыпуски",
            "year": "2009",
            "type": "Спешл",
            "thumb": "https://shikimori.one/system/animes/original/6421.jpg",
            "url": "https://shikimori.one/animes/z6421-fullmetal-alchemist-brotherhood-specials"
        },
        {
            "title": "Стальной алхимик: Священная звезда Милоса",
            "year": "2011",
            "type": "Фильм",
            "thumb": "https://shikimori.one/system/animes/original/9135.jpg",
            "url": "https://shikimori.one/animes/z9135-fullmetal-alchemist-the-sacred-star-of-milos"
        },
        {
            "title": "Стальной алхимик",
            "year": "2003",
            "type": "TV Сериал",
            "thumb": "https://shikimori.one/system/animes/original/121.jpg",
            "url": "https://shikimori.one/animes/z121-fullmetal-alchemist"
        },
        {
            "title": "Стальной алхимик: Завоеватель Шамбалы",
            "year": "2005",
            "type": "Фильм",
            "thumb": "https://shikimori.one/system/animes/original/430.jpg",
            "url": "https://shikimori.one/animes/z430-fullmetal-alchemist-the-conqueror-of-shamballa"
        },
        {
            "title": "Стальной алхимик: Размышления",
            "year": "2005",
            "type": "Спешл",
            "thumb": "https://shikimori.one/system/animes/original/664.jpg",
            "url": "https://shikimori.one/animes/z664-fullmetal-alchemist-reflections"
        },
        {
            "title": "Стальной алхимик: Братство",
            "year": "2009",
            "type": "TV Сериал",
            "thumb": "https://shikimori.one/system/animes/original/5114.jpg",
            "url": "https://shikimori.one/animes/z5114-fullmetal-alchemist-brotherhood"
        },
        {
            "title": "Стальной алхимик: Премиум коллекция",
            "year": "2006",
            "type": "OVA",
            "thumb": "https://shikimori.one/system/animes/original/908.jpg",
            "url": "https://shikimori.one/animes/z908-fullmetal-alchemist-premium-collection"
        },
        {
            "title": "Тяжёлый металл: Цельнометаллический солдат",
            "year": "1987",
            "type": "OVA",
            "thumb": "https://shikimori.one/system/animes/original/2601.jpg",
            "url": "https://shikimori.one/animes/2601-juusenki-l-gaim-iii-full-metal-soldier"
        }
    ]
}`)

const defaultState = {
    searchItems: testSearchData,
    currentItem: {},
}

// /api/alist/search << search
// /api/alist/item << link

const API = 'https://frozen-ocean-51941.herokuapp.com/api'

export const fetchSearchPage = (searchReq) => async (dispatch) =>{
    const link = `${API}/alist/search?search=${searchReq}`
    const {data} = await axios.get(link)
    console.log(JSON.stringify(data, null, 4))
    dispatch({type: 'setSearchItems', payload: data})
    // do something with data
    // dispatch({type: 'setPageData', payload: data})
    // dispatch({type: 'setSomethingElse', payload: data.key})
}

export const setSearchItems = (payload)=>({type: 'setSearchItems', payload})
export const setCurrentItem = (payload)=>({type: 'setCurrentItem', payload})

export const searchReducer = (state = defaultState, action)=>{
    const {payload, type} = action

    console.log(type)
    console.groupCollapsed('show')
    console.dir(payload);
    console.groupEnd()

    switch (type) {
      case 'setSearchItems': return {...state, searchItems: payload}
      case 'setCurrentItem': return {...state, currentItem: payload}
      
      default:
          return state
    }
}














