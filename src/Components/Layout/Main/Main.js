import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import TitlesGrid from '../../TitlesGrid/TitlesGrid'
import {Routes, Route, useRoutes, useParams} from 'react-router-dom'
import * as searchReducer from '../../../Redux/searchReducer'

const MainPage = ()=>{        
    return (
        <TitlesGrid/>
    )
}

const SearchPage = ()=>{
    const dispatch = useDispatch()
    const {req} = useParams()
    React.useEffect(()=>{
        if(req){
            dispatch(searchReducer.setSearchInputValue(''))
            dispatch(searchReducer.fetchSearchPage(req))
        }
    }, [req])
    
    function getHeadingTitle(){
        if(req){
            return `Результаты поиска «{req}» :`
        }
        return 'Введите поисковый запрос в поле выше'
    }
    
    return (
        <>
        <h1
        style={{
            width: '100%',
        }}
        >{getHeadingTitle()}</h1>
        {req && <TitlesGrid/>}
        </>
    )
}

export default function Main(props){
    const routes = useRoutes([
        {
            path: '',
            element: <MainPage/>,
        },
        {
            path: 'search/:req',
            element: <SearchPage/>,
        },
        {
            path: 'search/',
            element: <SearchPage/>,
        },
    ])    
    
    return (
        <main
        className={style.main}
        >
            <section
            className={style.mainContent}
            >
                {routes}
            </section>
        </main>
    )
}














