import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import ReactDom from 'react-dom'
//import * as reducer from '../Redux/SomeReducer'

export default function ModalAddToList({title, onClose}){
    // useDispatch
    // useSelector
    // useState
    // useEffect
    
    return ReactDom.createPortal((
        <aside
        className = {style.ModalAddToListWrapper}
        >
            <div
            className = {style.ModalAddToList}
            >
                <div>Добавить аниме</div>
                <div>«{title.title}»</div>
                <div>В один из списков:</div>
                
                <button
                onClick = {onClose}
                className = {style.ModalAddToListCloseBtn}
                >
                    &times;
                </button>
            </div>
        </aside>
    ), document.querySelector('#portal'))
}














