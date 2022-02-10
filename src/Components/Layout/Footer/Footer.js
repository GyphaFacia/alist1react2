import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
//import * as reducer from '../Redux/SomeReducer'
import style from './style.module.scss'
import Copyright from '../../Copyright/Copyright'
import GitLink from '../../GitLink/GitLink'

export default function Footer(props){
    // useDispatch
    // useSelector
    // useState
    // useEffect
    
    return (
        <footer
        className={style.footer}
        >
            <Copyright/>
            <GitLink/>
        </footer>
    )
}














