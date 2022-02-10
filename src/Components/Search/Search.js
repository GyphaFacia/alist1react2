import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import style from './style.module.scss'
//import * as reducer from '../Redux/SomeReducer'
import {BsSearch} from 'react-icons/bs'

export default function Search(props){
    // useDispatch
    // useSelector
    // useState
    // useEffect
    
    return (
        <div
        className = {style.Search}
        >
            <input
            type="text"
            className = {style.SearchInput}
            spellcheck="false"
            placeholder="Search for title"
            />
            
            <button
            className = {style.SearchGoButton}
            >
                <BsSearch/>
            </button>
        </div>
    )
}














