import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {Routes, Route, useRoutes, useParams} from 'react-router-dom'
import {PageLists, PageMain, PageRates, PageSearch} from 'Pages'

export default function Main(props){
    const routes = useRoutes([
        {
            path: '',
            element: <PageMain/>,
        },
        {
            path: 'search/:req',
            element: <PageSearch/>,
        },
        {
            path: 'search/',
            element: <PageSearch/>,
        },
        {
            path: 'rates/',
            element: <PageRates/>,
        },
        {
            path: 'lists/',
            element: <PageLists/>,
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














