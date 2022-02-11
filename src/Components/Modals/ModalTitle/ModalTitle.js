import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
import ReactDom from 'react-dom'
import * as searchReducer from '../../../Redux/searchReducer'

function CloseBtn(){
    const dispatch = useDispatch()
    
    return (
        <button
        onClick = {()=>{dispatch(searchReducer.setShowTitleModal(false))}}
        className = {style.CloseBtn}
        >
            &times;
        </button>
    )
}

export default function ModalTitle(){
    const dispatch = useDispatch()
    const { currentItem } = useSelector(store => store.search)
    
    console.log(currentItem);
    
    return ReactDom.createPortal((
        <aside
        className = {style.ModalTitleWrapper}
        >
            <div
            className = {style.ModalTitle}
            >
                <CloseBtn/>
                
            </div>
        </aside>
    ), document.querySelector('#portal'))
}














