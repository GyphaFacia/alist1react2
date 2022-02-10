import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import ReactDom from 'react-dom'
//import * as reducer from '../Redux/SomeReducer'

export default function ModalAddToList({title}){
    // useDispatch
    // useSelector
    // useState
    // useEffect
    
    return ReactDom.createPortal((
        <div
        className = {style.ModalAddToList}
        >
            <div>Добавить аниме</div>
            <div>«{title.title}»</div>
            <div>В один из списков:</div>
        </div>
    ), document.querySelector('#portal'))
}














