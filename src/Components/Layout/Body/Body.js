import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
//import * as reducer from '../Redux/SomeReducer'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import style from './style.module.scss'

export default function Body(props){
    // useDispatch
    // useSelector
    // useState
    // useEffect
    
    return (
        <div
        className={style.body}
        >
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}














