import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import Search from '../../Search/Search'
import Auth from '../../Auth/Auth'

export default function Header(props){
    // useDispatch
    // useSelector
    // useState
    // useEffect
    
    return (
        <header
        className={style.header}
        >
            <section
            className={`${style.headerLeft} ${style.headerSection}`}
            >
                <Search/>
            </section>
            
            <section
            className={`${style.headerRight} ${style.headerSection}`}
            >
                <Auth/>
            </section>
        </header>
    )
}














