import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import {Routes, Route, useRoutes, useParams, useLocation} from 'react-router-dom'
import {PageLists, PageMain, PageRates, PageSearch} from 'Pages'
import {AnimatePresence, motion} from 'framer-motion'

export default function Main(props){
    const location = useLocation()
    
    const routes = useRoutes([
        {
            path: '',
            element: <PageMain key='main'/>,
        },
        {
            path: 'search/:req',
            element: <PageSearch key='search'/>,
        },
        {
            path: 'search/',
            element: <PageSearch key='search'/>,
        },
        {
            path: 'rates/',
            element: <PageRates key='rates'/>,
        },
        {
            path: 'lists/',
            element: <PageLists key='lists'/>,
        },
    ])    
    
    // [[DO NOT TOUCH]] need to pass key so framer motion works for router
     const cloneRoutes = React.cloneElement(routes, { key: routes.props.children.key })
    
    return (
        <main
        className={style.main}
        >
            <section
            className={style.mainContent}
            >
            <AnimatePresence exitBeforeEnter>
                {cloneRoutes}
            </AnimatePresence>
            </section>
        </main>
    )
}














