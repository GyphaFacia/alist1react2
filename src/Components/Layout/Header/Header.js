import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import Search from '../../Search/Search'

export default function Header(props){
    // useDispatch
    // useSelector
    // useState
    // useEffect
    
    return (
        <header
        className={style.header}
        >
            <Search/>
        </header>
    )
}














